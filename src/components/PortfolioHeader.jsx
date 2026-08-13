import Link from "next/link"
import PlatformMenu from "./PlatformMenu"

export default function PortfolioHeader() {
  return (
    <header className="portfolio-header">
      <Link className="portfolio-brand" href="/" aria-label="HeyAbrar home">
        HeyAbrar
      </Link>
      <nav className="portfolio-nav" aria-label="Primary navigation">
        <Link href="/work">Selected work</Link>
        <PlatformMenu
          triggerClassName="portfolio-platform-trigger"
          triggerStyle={{ letterSpacing: "0.03em" }}
        />
        <Link href="/#reviews">References</Link>
        <Link className="portfolio-nav-cta" href="/#contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}
