import Link from "next/link";
import { Logo } from "./Doodles";
import NavLinks from "./NavLinks";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="sheet">
        <Link href="/" className="brand" aria-label="CampusTrack home">
          <Logo />
          <span>
            Campus<b>Track</b>
          </span>
        </Link>
        <nav aria-label="Main">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
