import type { Metadata } from "next";
import Link from "next/link";
import PlanLedger from "../components/PlanLedger";
import { Chart, Plus, QRSticker, ShortArrow, Underline, Wrench } from "../components/Doodles";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "CampusTrack subscription plans for colleges, schools and training institutes: Basic, Professional and Enterprise, plus setup, analytics and support.",
};

const faqs = [
  {
    q: "How is the subscription priced?",
    a: "Institutions pay monthly or yearly, based on the number of assets and users on the platform. Basic and Professional have fixed starting prices; Enterprise is quoted for your campus.",
  },
  {
    q: "Can we try it before committing the whole campus?",
    a: "Yes. We offer a free or discounted pilot in one department or lab block, so you can see the value before a full rollout.",
  },
  {
    q: "What does setup involve?",
    a: "We generate and print durable QR stickers for your existing assets, bulk-upload and categorise your asset data, configure dashboards for your departments and roles, and train your staff.",
  },
  {
    q: "Will it help with NAAC / NBA accreditation?",
    a: "CampusTrack keeps a centralized, auditable record of every asset and its maintenance history, and exports audit-ready reports for accreditation bodies and internal reviews.",
  },
  {
    q: "We already use an ERP. Does CampusTrack fit in?",
    a: "The Enterprise plan is built for large campuses that need integration with existing ERP systems. Wider ERP and library-system integration is on our roadmap.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="page-head" aria-labelledby="pricing-title">
        <div className="sheet page-head-grid">
          <div>
            <p className="eyebrow">
              <ShortArrow /> Pricing
            </p>
            <h1 id="pricing-title">
              Simple plans. <span className="red">No surprises.</span>
            </h1>
            <Underline className="hero-underline red" style={{ marginLeft: 0 }} />
          </div>
          <p className="lede">
            A B2B subscription that scales with the number of assets and people
            on your campus. Start small, grow department by department.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Plans" style={{ paddingTop: 8 }}>
        <div className="sheet">
          <PlanLedger />
        </div>
      </section>

      <section id="onboarding" className="section" aria-labelledby="addons-title" style={{ paddingTop: 24 }}>
        <div className="sheet">
          <p className="eyebrow">
            <ShortArrow /> Beyond the subscription
          </p>
          <h2 id="addons-title" className="h-section" style={{ maxWidth: "18ch" }}>
            Getting set up, and staying sharp.
          </h2>
          <div className="addons">
            <div className="thought">
              <QRSticker className="icon-sm" />
              <h3>Setup &amp; onboarding</h3>
              <p style={{ marginBottom: 10 }}>A one-time fee covering:</p>
              <ul className="plain-list">
                <li>QR generation &amp; printing for existing assets</li>
                <li>Bulk asset upload and categorisation</li>
                <li>Dashboards set up for departments &amp; roles</li>
                <li>Staff training and onboarding</li>
              </ul>
            </div>
            <div className="thought">
              <Chart className="icon-sm" />
              <h3>Premium analytics</h3>
              <ul className="plain-list">
                <li>Maintenance trend &amp; downtime analysis</li>
                <li>Department-wise fault frequency</li>
                <li>Asset utilisation &amp; lifecycle analytics</li>
                <li>Predictive maintenance recommendations</li>
              </ul>
            </div>
            <div className="thought">
              <Wrench className="icon-sm" />
              <h3>Support packages</h3>
              <p>
                Annual technical support and system-maintenance packages, so the
                platform keeps running as smoothly as your labs do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title" style={{ paddingTop: 24 }}>
        <div className="sheet">
          <h2 id="faq-title" className="h-section">Questions we get asked</h2>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <Plus />
                </summary>
                <p className="answer">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing" aria-labelledby="pricing-closing">
        <div className="sheet">
          <h2 id="pricing-closing">Start with one lab block.</h2>
          <p>Run a pilot, see the tickets close, then decide.</p>
          <div className="hero-actions">
            <Link href="/demo" className="btn btn--solid">
              Request a pilot
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
