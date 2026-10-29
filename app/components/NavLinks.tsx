"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="nav">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="nav-link"
            aria-current={pathname.startsWith(l.href) ? "page" : undefined}
          >
            {l.label}
          </Link>
        </li>
      ))}
      <li>
        <Link href="/demo" className="btn btn--small">
          Book a demo
        </Link>
      </li>
    </ul>
  );
}
