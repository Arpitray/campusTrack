import Link from "next/link";
import { Logo, Rule } from "./Doodles";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="sheet">
        <Rule className="footer-rule" />
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" aria-label="CampusTrack home">
              <Logo />
              <span>
                Campus<b>Track</b>
              </span>
            </Link>
            <p className="footer-tag">
              Every asset, always accounted for. QR-based equipment tracking
              and maintenance for colleges, schools and training institutes.
            </p>
          </div>
          <div>
            <h2>Product</h2>
            <ul>
              <li>
                <Link href="/product#staff-app">Staff app</Link>
              </li>
              <li>
                <Link href="/product#admin-dashboard">Admin dashboard</Link>
              </li>
              <li>
                <Link href="/product#technology">Technology</Link>
              </li>
              <li>
                <Link href="/product#roadmap">Roadmap</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Plans</h2>
            <ul>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/pricing#onboarding">Setup &amp; onboarding</Link>
              </li>
              <li>
                <Link href="/demo">Pilot program</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/about#invest">For investors</Link>
              </li>
              <li>
                <Link href="/demo">Book a demo</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 CampusTrack</span>
          <span>Made by students of BCA, JAIN (Deemed-to-be University)</span>
        </div>
      </div>
    </footer>
  );
}
