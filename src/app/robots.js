export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...[
        "Googlebot",
        "Bingbot",
        "OAI-SearchBot",
        "PerplexityBot",
        "Claude-SearchBot",
        "Claude-User",
      ].map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://heyabrar.com/sitemap.xml",
    host: "https://heyabrar.com",
  }
}
