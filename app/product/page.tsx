import type { Metadata } from "next";
import Link from "next/link";
import ProcessStrip from "../components/ProcessStrip";
import {
  Bell,
  Calendar,
  Chart,
  Check,
  Clipboard,
  Dashboard,
  Magnifier,
  Phone,
  Pin,
  QRSticker,
  ShortArrow,
  Sparkle,
  Underline,
  Wrench,
} from "../components/Doodles";

export const metadata: Metadata = {
  title: "Product",
  description:
    "The CampusTrack staff app and admin dashboard: QR asset profiles, one-tap fault reports, preventive maintenance scheduling and audit-ready reports.",
};

const staffFeatures = [
  { icon: Pin, title: "Institutional login", body: "Register and sign in with your institutional ID — no new passwords to hand out." },
  { icon: Magnifier, title: "Scan to see everything", body: "Point your phone camera at a QR sticker to open the asset's full profile." },
  { icon: Wrench, title: "Report with a photo", body: "Describe the fault, snap a picture, send. The ticket is created for you." },
  { icon: Check, title: "Track your reports", body: "Follow each issue you raised from ticket created through to verified." },
  { icon: Clipboard, title: "Your room, your assets", body: "See everything assigned to your department, lab or classroom." },
  { icon: Bell, title: "Notifications", body: "Hear about ticket updates and upcoming maintenance without asking." },
];

const adminFeatures = [
  { icon: QRSticker, title: "Onboard & generate QR", body: "Add or edit assets and generate a unique QR code for each one." },
  { icon: Magnifier, title: "Searchable inventory", body: "Filter the complete inventory by category, location, condition or custodian." },
  { icon: Pin, title: "Assign & reassign", body: "Move assets between departments, rooms or staff with a full trail." },
  { icon: Wrench, title: "All tickets, one board", body: "View and manage every maintenance ticket across campus." },
  { icon: Calendar, title: "Preventive maintenance", body: "Schedule servicing and get alerts before due dates slip." },
  { icon: Chart, title: "Workload & response time", body: "See how tickets are spread across technicians and how fast they close." },
  { icon: Clipboard, title: "Audit-ready reports", body: "Export records for NAAC / NBA accreditation or internal audits." },
  { icon: Dashboard, title: "Condition analytics", body: "See where assets are, what shape they're in and where faults repeat." },
];

const stack = [
  { layer: "Admin dashboard", tech: "React.js", body: "A fast web dashboard for facilities and administration teams." },
  { layer: "Staff mobile app", tech: "React Native", body: "QR scanning directly through the phone camera." },
  { layer: "Backend", tech: "Node.js + Express.js", body: "Asset records, ticket creation, department routing and notifications." },
  { layer: "Database", tech: "PostgreSQL", body: "Assets, QR mappings, maintenance history, tickets, roles and assignments." },
];

const roadmap = [
  { title: "IoT / RFID tracking", body: "Real-time location tracking of movable assets across campus." },
  { title: "Predictive maintenance", body: "Use historical fault data to predict which assets are likely to fail next." },
  { title: "Image-based damage detection", body: "AI analysis of uploaded photos to auto-assess damage severity." },
  { title: "Mobile push notifications", body: "Automatic reminders for upcoming maintenance and ticket updates." },
  { title: "ERP integration", body: "Connect with existing college administration or library systems." },
  { title: "Multi-campus support", body: "Manage assets across several campuses of one institution from one dashboard." },
  { title: "Corporate & healthcare", body: "Adapt the same engine for office and hospital equipment tracking." },
];

export default function ProductPage() {
  return (
    <>
      <section className="page-head" aria-labelledby="product-title">
        <div className="sheet page-head-grid">
          <div>
            <p className="eyebrow">
              <ShortArrow /> The product
            </p>
            <h1 id="product-title">
              Not a list of assets.
              <br />
              <span className="red">A record that reports itself.</span>
            </h1>
            <Underline className="hero-underline red" style={{ marginLeft: 0 }} />
          </div>
          <div>
            <p className="lede">
              CampusTrack turns every physical item into a scannable,
              trackable, self-reporting record — and turns informal complaint
              books into structured, actionable maintenance data.
            </p>
          </div>
        </div>
      </section>

      {/* Staff app */}
      <section id="staff-app" className="section" aria-labelledby="staff-title">
        <div className="sheet">
          <div className="feature-head">
            <Phone />
            <div>
              <p className="eyebrow" style={{ marginBottom: 0 }}>Interface A</p>
              <h2 id="staff-title" className="h-section">Staff &amp; faculty app</h2>
            </div>
          </div>
          <ul className="grid-3 stagger" style={{ marginTop: 40, listStyle: "none" }}>
            {staffFeatures.map(({ icon: Icon, title, body }) => (
              <li key={title} className="thought">
                <Icon className="icon-sm" />
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Admin dashboard */}
      <section id="admin-dashboard" className="section" aria-labelledby="admin-title" style={{ paddingTop: 24 }}>
        <div className="sheet">
          <div className="feature-head">
            <Dashboard />
            <div>
              <p className="eyebrow" style={{ marginBottom: 0 }}>Interface B</p>
              <h2 id="admin-title" className="h-section">Admin &amp; facilities dashboard</h2>
            </div>
          </div>
          <ul className="usp-grid" style={{ marginTop: 40 }}>
            {adminFeatures.map(({ icon: Icon, title, body }) => (
              <li key={title}>
                <Icon />
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessStrip />

      {/* Maintenance intelligence */}
      <section className="section" aria-labelledby="intel-title">
        <div className="sheet split">
          <div>
            <p className="eyebrow">
              <ShortArrow /> Maintenance intelligence
            </p>
            <h2 id="intel-title" className="h-section">
              Not every fault is <span className="hl">equally urgent.</span>
            </h2>
            <p className="ink-muted" style={{ marginTop: 22, maxWidth: "44ch" }}>
              A rule-based, AI-assisted engine schedules preventive
              maintenance, generates tickets for reported faults and routes
              them to the right team. Instead of a first-come queue, it weighs
              what matters to prioritise urgent work.
            </p>
          </div>
          <div className="scrap tilt-r" style={{ padding: "34px 30px" }}>
            <span className="tape" aria-hidden="true" />
            <h3 className="h-sub" style={{ marginBottom: 18 }}>What the engine weighs</h3>
            <ul className="check-list">
              <li>
                <Check />
                <span><strong>Asset criticality</strong> — a lecture-hall projector before a spare monitor</span>
              </li>
              <li>
                <Check />
                <span><strong>Similar complaints</strong> — five reports on one router means something</span>
              </li>
              <li>
                <Check />
                <span><strong>Overdue service</strong> — how long the asset has been due for maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Campus configurations */}
      <section className="section" aria-labelledby="config-title" style={{ paddingTop: 24 }}>
        <div className="sheet">
          <p className="eyebrow">
            <ShortArrow /> One engine, many campuses
          </p>
          <h2 id="config-title" className="h-section" style={{ maxWidth: "18ch" }}>
            Configured around what <span className="red">your</span> campus owns.
          </h2>
          <ul className="campus-row">
            <li>
              <h3>College A</h3>
              <ShortArrow />
              <ul className="tag-list">
                <li>Labs</li>
                <li>AV equipment</li>
                <li>Computers</li>
              </ul>
            </li>
            <li>
              <h3>College B</h3>
              <ShortArrow />
              <ul className="tag-list">
                <li>Furniture</li>
                <li>Networking</li>
                <li>Library equipment</li>
              </ul>
            </li>
            <li>
              <h3>Training institute</h3>
              <ShortArrow />
              <ul className="tag-list">
                <li>Studio / recording</li>
                <li>Computers</li>
                <li>Instruments</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="section" aria-labelledby="tech-title" style={{ paddingTop: 24 }}>
        <div className="sheet">
          <div className="split">
            <div>
              <p className="eyebrow">
                <ShortArrow /> Technology
              </p>
              <h2 id="tech-title" className="h-section">Plain, proven, built to scale.</h2>
            </div>
            <div className="note-yellow tilt-l" style={{ alignSelf: "end" }}>
              <span className="tape" aria-hidden="true" />
              <p>
                Each QR code is generated with standard libraries and printed on
                a durable, weather-resistant sticker. A scan pulls the asset&apos;s
                live record straight from the database.
              </p>
            </div>
          </div>
          <ul className="stack">
            {stack.map((s) => (
              <li key={s.tech} className="scrap">
                <span className="layer">{s.layer}</span>
                <h3>{s.tech}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="section" aria-labelledby="roadmap-title" style={{ paddingTop: 24 }}>
        <div className="sheet split">
          <div>
            <p className="eyebrow">
              <ShortArrow /> Future scope
            </p>
            <h2 id="roadmap-title" className="h-section">Where CampusTrack goes next.</h2>
            <Sparkle style={{ width: 80, height: 80, marginTop: 28 }} className="red" />
          </div>
          <ol className="roadmap">
            {roadmap.map((r) => (
              <li key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="closing" aria-labelledby="product-closing">
        <div className="sheet">
          <h2 id="product-closing">See it on your own projector.</h2>
          <p>
            We&apos;ll run a live demo: scan an asset, identify it and report a
            fault — in under a minute.
          </p>
          <div className="hero-actions">
            <Link href="/demo" className="btn btn--solid">
              Book a demo
            </Link>
            <Link href="/pricing" className="link-hand">
              Compare plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
