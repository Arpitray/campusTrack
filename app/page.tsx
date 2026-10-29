import Link from "next/link";
import ScanDemo from "./components/ScanDemo";
import ProcessStrip from "./components/ProcessStrip";
import {
  Bracket,
  Building,
  Calendar,
  Chart,
  Check,
  Clipboard,
  CurlArrow,
  Dashboard,
  Magnifier,
  Phone,
  Pin,
  Projector,
  QRSticker,
  Question,
  ShortArrow,
  Shield,
  Speech,
  Star,
  Underline,
  Users,
  Wrench,
} from "./components/Doodles";

const questions = [
  "Who currently has custody of this asset?",
  "Which room, lab or department is it assigned to?",
  "When was it last serviced — and when is it due next?",
  "Was that reported fault actually fixed?",
  "How many assets are idle, damaged or missing at audit time?",
];

const assetTypes = [
  "Projectors & smart boards",
  "Laptops & desktops",
  "Lab instruments",
  "Cameras & AV gear",
  "Mics & PA systems",
  "Routers & switches",
  "Furniture",
];

const usps = [
  {
    icon: Magnifier,
    title: "Instant identification",
    body: "One QR scan reveals the full asset history. No manual lookup.",
  },
  {
    icon: Wrench,
    title: "One-tap fault reporting",
    body: "Staff report issues straight from the asset itself, photo included.",
  },
  {
    icon: Calendar,
    title: "Automated maintenance",
    body: "Preventive maintenance alerts based on service due dates.",
  },
  {
    icon: Pin,
    title: "Centralized accountability",
    body: "Every asset has a clear, current custodian and location.",
  },
  {
    icon: Clipboard,
    title: "Audit-ready reporting",
    body: "Instantly exportable records for NAAC / NBA and internal audits.",
  },
  {
    icon: Chart,
    title: "Analytics for admins",
    body: "Spot high-fault equipment and departments with repeat issues.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- Opening ---------- */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="sheet">
          <div className="hero-grid">
            <div>
              <h1 id="hero-title" className="h-display">
                Every asset,
                <br />
                always
                <span className="accent-line">accounted for.</span>
              </h1>
              <Underline className="hero-underline red" />

              <div className="hero-actions">
                <Link href="/demo" className="btn">
                  Book a free demo
                </Link>
                <a href="#how-it-works" className="link-hand">
                  See how a scan works
                </a>
                <CurlArrow className="hero-arrow red" />
              </div>
            </div>

            <div className="hero-aside">
              <Star className="hero-star red" />
              <p className="lede">
                CampusTrack puts a QR code on every projector, laptop and lab
                instrument your institution owns. Scan it to see where it is,
                who has it and when it was last serviced — and report a fault
                in a single tap.
              </p>
              <Projector className="hero-sketch" />
              <div className="note-yellow tilt-r" style={{ maxWidth: 360 }}>
                <span className="tape" aria-hidden="true" />
                <p>
                  Built for colleges, schools and training institutes still
                  running on registers and spreadsheets.
                </p>
              </div>
            </div>
          </div>

          <div className="facts">
            <Bracket className="facts-bracket" />
            <ul className="facts-grid">
              <li>
                <span className="fact-num">1 scan</span>
                <span className="fact-label">to see an asset&apos;s full profile</span>
              </li>
              <li>
                <span className="fact-num">1 tap</span>
                <span className="fact-label">to raise a maintenance ticket</span>
              </li>
              <li>
                <span className="fact-num">6 stages</span>
                <span className="fact-label">tracked from report to verified fix</span>
              </li>
              <li>
                <span className="fact-num">0</span>
                <span className="fact-label">complaint books or follow-up calls</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Problem ---------- */}
      <section className="section" aria-labelledby="problem-title">
        <div className="sheet split split--wide-left">
          <div>
            <p className="eyebrow">
              <ShortArrow /> The problem
            </p>
            <h2 id="problem-title" className="h-section">
              Hundreds of assets.
              <br />
              <span className="hl">One dusty register.</span>
            </h2>
            <p className="ink-muted" style={{ marginTop: 22, maxWidth: "46ch" }}>
              Most institutions still track their equipment in manual registers
              or scattered spreadsheets. So nobody can quickly answer:
            </p>
            <ul className="question-list">
              {questions.map((q) => (
                <li key={q}>
                  <Question />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <ul className="chip-row" aria-label="Typical campus assets">
              {assetTypes.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="register" aria-label="Example of a manual complaint register">
              <span className="register-line">
                <s>Projector – Lab 3 – not working</s>
              </span>
              <span className="register-line">called IT again, no reply</span>
              <span className="register-line">
                <s>who took the HDMI cable??</s>
              </span>
              <span className="register-line">sent to Admin block (Mon)</span>
              <span className="register-line">still not fixed — Thurs</span>
              <span className="register-line">&nbsp;</span>
              <p className="register-note">
                A projector reported &ldquo;not working&rdquo; can take days to
                reach the right person — because there&apos;s no structured way
                to log, route and track the complaint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Scan demo ---------- */}
      <section id="how-it-works" className="section" aria-labelledby="demo-title" style={{ paddingTop: 24 }}>
        <div className="sheet">
          <p className="eyebrow">
            <ShortArrow /> Our solution
          </p>
          <h2 id="demo-title" className="h-section" style={{ maxWidth: "18ch" }}>
            Stick a QR on it. <span className="red">Scan it.</span> Know
            everything.
          </h2>
          <p className="lede" style={{ marginTop: 20, maxWidth: "48ch" }}>
            Every asset gets a unique, tamper-resistant QR sticker at
            onboarding. Here&apos;s what a lab assistant sees when they scan the
            projector in Lab 3.
          </p>
          <ScanDemo />
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <ProcessStrip />

      {/* ---------- Two interfaces ---------- */}
      <section className="section" aria-labelledby="interfaces-title">
        <div className="sheet">
          <p className="eyebrow">
            <ShortArrow /> Two sides of one system
          </p>
          <h2 id="interfaces-title" className="h-section" style={{ maxWidth: "16ch" }}>
            A scanner in every pocket. A ledger on every admin&apos;s desk.
          </h2>

          <div className="feature-cols">
            <div>
              <div className="feature-head">
                <Phone />
                <div>
                  <h3>Staff &amp; faculty app</h3>
                  <p>For faculty, lab assistants and admin staff</p>
                </div>
              </div>
              <ul className="check-list">
                {[
                  "Log in with your institutional ID",
                  "Scan any asset's QR code to view its full profile",
                  "Report a fault with a photo attached",
                  "Track the status of issues you've reported",
                  "See assets assigned to your room or department",
                  "Get notified on ticket updates and maintenance dates",
                ].map((t) => (
                  <li key={t}>
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="feature-head">
                <Dashboard />
                <div>
                  <h3>Admin &amp; facilities dashboard</h3>
                  <p>For the people who keep the campus running</p>
                </div>
              </div>
              <ul className="check-list">
                {[
                  "Add assets and generate their QR codes",
                  "Search and filter the complete inventory",
                  "Assign or reassign assets to rooms, departments or staff",
                  "Manage every maintenance ticket in one place",
                  "Schedule preventive maintenance with due-date alerts",
                  "Track technician workload and response times",
                  "Export audit-ready reports for NAAC / NBA",
                ].map((t) => (
                  <li key={t}>
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p style={{ marginTop: 48 }}>
            <Link href="/product" className="link-hand">
              Explore every feature
            </Link>
          </p>
        </div>
      </section>

      {/* ---------- USP ---------- */}
      <section className="section" aria-labelledby="usp-title" style={{ paddingTop: 24 }}>
        <div className="sheet">
          <h2 id="usp-title" className="sr-only">
            Why CampusTrack
          </h2>
          <figure className="speech" style={{ margin: "0 auto" }}>
            <Speech className="speech-outline" />
            <blockquote>
              <p>
                &ldquo;Scan an asset, know everything about it —{" "}
                <span className="red">and fix it faster.</span>&rdquo;
              </p>
            </blockquote>
            <figcaption>
              Registers go stale. CampusTrack adds a live, scannable layer on
              top of every physical asset.
            </figcaption>
          </figure>

          <ul className="usp-grid">
            {usps.map(({ icon: Icon, title, body }) => (
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

      {/* ---------- Who it's for ---------- */}
      <section className="section" aria-labelledby="who-title">
        <div className="sheet">
          <div className="split">
            <div>
              <p className="eyebrow">
                <ShortArrow /> Who it&apos;s for
              </p>
              <h2 id="who-title" className="h-section">
                The people in the lab, and the people who sign off on it.
              </h2>
            </div>
            <Users style={{ maxWidth: 320, alignSelf: "end" }} className="blue" />
          </div>

          <div className="audience">
            <div className="scrap tilt-l">
              <span className="tape tape--left" aria-hidden="true" />
              <h3>Everyday users</h3>
              <p className="who">Faculty · Lab assistants · Admin staff</p>
              <p>
                Look up asset details and report faults in the labs,
                classrooms and offices they work in — every single day.
              </p>
            </div>
            <div className="scrap">
              <span className="tape tape--right" aria-hidden="true" />
              <h3>Institutions</h3>
              <p className="who">Colleges · Universities · Training institutes</p>
              <p>
                Buy CampusTrack for a centralized, auditable record of every
                asset they own — and smoother maintenance operations.
              </p>
            </div>
            <div className="scrap tilt-r">
              <span className="tape" aria-hidden="true" />
              <h3>Also a fit for</h3>
              <ul className="plain-list" style={{ marginTop: 8 }}>
                <li>Schools &amp; coaching institutes</li>
                <li>Corporate training centres</li>
                <li>Co-working spaces &amp; libraries</li>
                <li>Hostels &amp; campus facility teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Impact ---------- */}
      <section className="section" aria-labelledby="impact-title" style={{ paddingTop: 24 }}>
        <div className="sheet split">
          <div>
            <p className="eyebrow">
              <ShortArrow /> What changes
            </p>
            <h2 id="impact-title" className="h-section">
              Fewer dead projectors. <span className="hl">Fewer lost laptops.</span>
            </h2>
            <p className="ink-muted" style={{ marginTop: 22, maxWidth: "44ch" }}>
              When asset information becomes structured data, patterns show up
              — like a lab with frequent projector failures — so you can plan
              maintenance or replacement before it costs a class.
            </p>
          </div>
          <div className="grid-2">
            <div className="thought">
              <Building className="icon-sm" />
              <h3>For the institution</h3>
              <ul className="plain-list">
                <li>Less equipment loss and misplacement</li>
                <li>Clear accountability for every asset</li>
                <li>Faster fixes, less lab downtime</li>
                <li>Audit-ready accreditation records</li>
                <li>Data-driven replacement budgets</li>
              </ul>
            </div>
            <div className="thought">
              <Shield className="icon-sm" />
              <h3>For staff &amp; students</h3>
              <ul className="plain-list">
                <li>Working labs and classrooms</li>
                <li>One tap to report — no informal complaints</li>
                <li>Clarity on when an issue will be fixed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="closing" aria-labelledby="closing-title">
        <div className="sheet">
          <QRSticker style={{ width: 64, height: 64, marginBottom: 24 }} className="blue" />
          <h2 id="closing-title">Turn your register into a live record.</h2>
          <p>
            Start with a free or discounted pilot in one department or lab
            block. See the difference before you roll it out campus-wide.
          </p>
          <div className="hero-actions">
            <Link href="/demo" className="btn btn--solid">
              Start a pilot
            </Link>
            <Link href="/pricing" className="link-hand">
              See plans &amp; pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
