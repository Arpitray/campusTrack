import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

const marker = Kalam({
  variable: "--font-marker",
  weight: ["700"],
  subsets: ["latin"],
});

const hand = Patrick_Hand({
  variable: "--font-hand",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CampusTrack — Every Asset, Always Accounted For",
    template: "%s · CampusTrack",
  },
  description:
    "CampusTrack is a QR-based equipment and asset tracking system for colleges, schools and training institutes. Scan an asset, know everything about it, and fix it faster.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${marker.variable} ${hand.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
