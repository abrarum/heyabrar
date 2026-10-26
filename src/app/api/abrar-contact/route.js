import { NextResponse } from 'next/server';
import {
    ContactSubmissionError,
    sendContactEmail,
} from '@/lib/contactEmail.mjs';

export async function POST(request) {
    try {
        const data = await request.json();
        await sendContactEmail(data);

        return NextResponse.json({ success: true });
    } catch (error) {
        if (error instanceof ContactSubmissionError) {
            return NextResponse.json(
                { error: error.message },
                { status: 400 }
            );
        }

        console.error('Error sending email (abrar-contact):', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
