# HeyAbrar portfolio

Abrar's standalone AI and full-stack engineering portfolio.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact form

All contact forms submit to one API route, which sends notifications through the Amazon SES HTTPS API.
Copy `.env.example` to `.env.local` and provide AWS credentials for local development.
The SES identity and recipient default to `info@heyabrar.com` in the `us-east-1` region.

The IAM principal used by the site should have only the permission it needs:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ses:SendEmail",
      "Resource": "arn:aws:ses:us-east-1:YOUR_AWS_ACCOUNT_ID:identity/heyabrar.com",
      "Condition": {
        "StringEquals": {
          "ses:FromAddress": "info@heyabrar.com",
          "aws:RequestedRegion": "us-east-1"
        },
        "ForAllValues:StringEquals": {
          "ses:Recipients": ["info@heyabrar.com"]
        },
        "Bool": {
          "aws:SecureTransport": "true"
        }
      }
    }
  ]
}
```

Verify `heyabrar.com` as an SES sending identity in `us-east-1` before deploying.

## Validation

```bash
npm run lint
npm run build
```

## Cloudflare deployment

The project is configured for Cloudflare Workers through the OpenNext adapter.

```bash
npm run cf:build
npm run preview
npm run deploy
```

Create an access key for the restricted IAM principal.
In the Cloudflare Worker settings, add `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` as encrypted secrets before deploying.
