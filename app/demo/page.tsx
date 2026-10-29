import type { Metadata } from "next";
import { Suspense } from "react";
import DemoForm from "../components/DemoForm";
import { NumberCircle, ShortArrow, Underline } from "../components/Doodles";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "See CampusTrack live: scan an asset, identify it and report a fault. Or start a free or discounted pilot in one department.",
};

const next = [
  "We set up a short live demo with your team.",
  "You scan an asset, see its profile and report a fault yourself.",
  "If it fits, we pilot in one department or lab block.",
];

export default function DemoPage() {
  return (
    <section className="page-head section" aria-labelledby="demo-page-title">
      <div className="sheet split split--wide-left">
        <div>
          <p className="eyebrow">
            <ShortArrow /> Book a demo
          </p>
          <h1 id="demo-page-title">
            Let&apos;s scan <span className="red">your</span> first asset.
          </h1>
          <Underline className="hero-underline red" style={{ marginLeft: 0 }} />
          <div className="scrap" style={{ marginTop: 40 }}>
            <Suspense fallback={<p>Loading form…</p>}>
              <DemoForm />
            </Suspense>
          </div>
        </div>

        <aside aria-labelledby="next-title" style={{ paddingTop: 12 }}>
          <h2 id="next-title" className="h-sub">What happens next</h2>
          <ol className="steps" style={{ gridTemplateColumns: "1fr", marginTop: 28 }}>
            {next.map((s, i) => (
              <li key={s} style={{ gridTemplateColumns: "58px 1fr", marginTop: 0 }}>
                <span className="step-num">
                  <NumberCircle />
                  {i + 1}
                </span>
                <p style={{ fontSize: "var(--dp-typography-reading)", color: "var(--dp-color-ink)", marginTop: 10 }}>
                  {s}
                </p>
              </li>
            ))}
          </ol>
          <div className="note-yellow tilt-r" style={{ marginTop: 48 }}>
            <span className="tape" aria-hidden="true" />
            <p>
              Pilots are free or discounted, so you can prove the value in one
              lab block before rolling out campus-wide.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
