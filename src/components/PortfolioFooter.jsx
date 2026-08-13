import Link from "next/link"

export default function PortfolioFooter() {
  return (
    <footer className="portfolio-footer">
      <p>© 2026 HeyAbrar</p>
      <div>
        <Link href="/">Home</Link>
        <Link href="/work">Selected work</Link>
        <Link href="/shopify-custom-app-development">
          Shopify app development
        </Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </footer>
  )
}
