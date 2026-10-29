import type { Metadata } from "next";
import Link from "next/link";
import {
  Bracket,
  Building,
  Face,
  NumberCircle,
  ShortArrow,
  Sparkle,
  Underline,
  Users,
} from "../components/Doodles";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we're building CampusTrack, the market opportunity, our business model and the team behind it.",
};

const costs = [
  { item: "Domain and website", why: "Registering a domain and a basic web presence.", amount: 2000 },
  { item: "Cloud / server hosting", why: "Running the web dashboard and backend online.", amount: 6000 },
  { item: "Database and storage", why: "Asset records, QR mappings, history and images.", amount: 3000 },
  { item: "QR code generation & printing", why: "Durable QR stickers for pilot assets.", amount: 2500 },
  { item: "Mobile app development tools", why: "Building and testing the staff scanning app.", amount: 4500 },
  { item: "Testing and miscellaneous", why: "Debugging, QA and small technical expenses.", amount: 3000 },
  { item: "Marketing and demonstration", why: "Demo material and a pilot with a partner institution.", amount: 4000 },
];

const go2market = [
  { title: "Live demos to administration", body: "Show how fast an asset can be scanned, identified and a fault reported." },
  { title: "Pilot programs", body: "A free or discounted pilot in one department or lab block, before full rollout." },
  { title: "Website & LinkedIn", body: "A professional presence aimed at facilities managers and college administrators." },
  { title: "Events", body: "Hackathons, innovation fairs and education-technology exhibitions." },
  { title: "Partnerships", body: "Ed-tech resellers, campus-management software vendors and facility-management firms." },
  { title: "Referrals", body: "Introductions from satisfied institutions to affiliated and sister colleges." },
];

const team = [
  { name: "Roy Arpit", id: "24BCAR0488" },
  { name: "Tanya Baid", id: "24BCAR0520" },
  { name: "Shivani Ram Suryawanshi", id: "24BCAR0501" },
];

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function AboutPage() {
  const total = costs.reduce((s, c) => s + c.amount, 0);

  return (
    <>
      <section className="page-head" aria-labelledby="about-title">
        <div className="sheet page-head-grid">
          <div>
            <p className="eyebrow">
              <ShortArrow /> About CampusTrack
            </p>
            <h1 id="about-title">
              Built for the way colleges <span className="red">actually</span> run.
            </h1>
            <Underline className="hero-underline red" style={{ marginLeft: 0 }} />
          </div>
          <p className="lede">
            We&apos;ve all sat in a class where the projector didn&apos;t work
            and nobody knew who to tell. CampusTrack started there.
          </p>
        </div>
      </section>

      {/* Why now */}
      <section className="section" aria-labelledby="why-title" style={{ paddingTop: 32 }}>
        <div className="sheet split">
          <div>
            <p className="eyebrow">
              <ShortArrow /> Why now
            </p>
            <h2 id="why-title" className="h-section">
              Accreditation asks for proof. <span className="hl">Registers can&apos;t give it.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gap: 22 }}>
            <p className="ink-muted">
              Educational institutions are under growing pressure to show
              proper infrastructure management — for accreditation bodies like
              NAAC and NBA, and for internal budget accountability.
            </p>
            <p className="ink-muted">
              Most still rely on manual registers that can&apos;t scale with the
              number of assets they own. That gap is the opportunity.
            </p>
            <div className="scrap tilt-r" style={{ marginTop: 10 }}>
              <span className="tape" aria-hidden="true" />
              <h3 className="h-sub" style={{ marginBottom: 10 }}>Our market</h3>
              <ul className="plain-list">
                <li>Colleges and universities</li>
                <li>Schools and coaching institutes</li>
                <li>Polytechnic and vocational training institutes</li>
                <li>Corporate training academies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business model */}
      <section className="strip" aria-labelledby="model-title">
        <div className="sheet">
          <p className="eyebrow">
            <ShortArrow /> Business model
          </p>
          <h2 id="model-title" className="h-section" style={{ maxWidth: "18ch" }}>
            B2B SaaS. Institutions subscribe; we keep it running.
          </h2>
          <ol className="steps steps--four">
            {[
              { t: "Institutional subscription", b: "Monthly or yearly, based on assets and users." },
              { t: "Setup & onboarding fee", b: "QR printing, data upload, configuration and training." },
              { t: "Premium analytics", b: "Downtime, fault-frequency, lifecycle and predictive reports." },
              { t: "Support packages", b: "Annual technical support and system maintenance." },
            ].map((r, i) => (
              <li key={r.t}>
                <span className="step-num">
                  <NumberCircle />
                  {i + 1}
                </span>
                <div>
                  <h3>{r.t}</h3>
                  <p>{r.b}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="grid-2" style={{ marginTop: 64 }}>
            <div className="scrap">
              <h3 className="h-sub" style={{ marginBottom: 12 }}>Revenue, worked out</h3>
              <dl className="sum-lines">
                <div>
                  <dt>One institution, per month</dt>
                  <dd>₹15,000</dd>
                </div>
                <div>
                  <dt>× 12 months</dt>
                  <dd>₹1,80,000 / yr</dd>
                </div>
                <div className="total">
                  <dt>× 20 institutions</dt>
                  <dd>₹36,00,000 / yr</dd>
                </div>
              </dl>
            </div>
            <div className="scrap">
              <h3 className="h-sub" style={{ marginBottom: 12 }}>Margin on one Professional plan</h3>
              <dl className="sum-lines">
                <div>
                  <dt>Monthly revenue</dt>
                  <dd>₹20,000</dd>
                </div>
                <div>
                  <dt>Est. operating cost</dt>
                  <dd>– ₹12,000</dd>
                </div>
                <div>
                  <dt>Monthly surplus</dt>
                  <dd>₹8,000</dd>
                </div>
                <div className="total">
                  <dt>Annual surplus</dt>
                  <dd>₹96,000</dd>
                </div>
              </dl>
            </div>
          </div>
          <p className="fine">
            Illustrative projections, not guaranteed revenue. Actual figures
            depend on infrastructure, staffing and operating costs.
          </p>
        </div>
      </section>

      {/* Investment */}
      <section id="invest" className="section" aria-labelledby="invest-title">
        <div className="sheet split split--wide-left">
          <div>
            <p className="eyebrow">
              <ShortArrow /> For investors
            </p>
            <h2 id="invest-title" className="h-section">
              A working prototype for <span className="red">{inr(total)}.</span>
            </h2>
            <p className="ink-muted" style={{ marginTop: 22, maxWidth: "44ch" }}>
              CampusTrack solves a real, recurring operational problem. Because
              it&apos;s software on a subscription, each new institution is a
              configuration — not a rebuild — giving it room to scale across
              colleges, schools and training institutes.
            </p>
            <div className="note-yellow tilt-l" style={{ marginTop: 36, maxWidth: 440 }}>
              <span className="tape" aria-hidden="true" />
              <p>
                CampusTrack turns every projector, laptop and lab instrument
                into a smart, trackable asset — connecting staff, admins and
                maintenance teams through one QR-based platform.
              </p>
            </div>
          </div>

          <div>
            <table className="cost-table">
              <caption>Initial prototype budget</caption>
              <thead>
                <tr>
                  <th scope="col">Expense</th>
                  <th scope="col">Estimate</th>
                </tr>
              </thead>
              <tbody>
                {costs.map((c) => (
                  <tr key={c.item}>
                    <th scope="row" style={{ fontWeight: 400 }}>
                      {c.item}
                      <span className="why">{c.why}</span>
                    </th>
                    <td>{inr(c.amount)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Total</th>
                  <td>{inr(total)}</td>
                </tr>
              </tfoot>
            </table>
            <p className="fine">An illustrative prototype estimate, not a fixed commercial development cost.</p>
          </div>
        </div>
      </section>

      {/* Go to market */}
      <section className="section" aria-labelledby="gtm-title" style={{ paddingTop: 24 }}>
        <div className="sheet">
          <div className="split">
            <div>
              <p className="eyebrow">
                <ShortArrow /> How we&apos;ll reach campuses
              </p>
              <h2 id="gtm-title" className="h-section">Show it working. Then let it spread.</h2>
            </div>
            <Building style={{ width: 110, height: 110, alignSelf: "end" }} className="blue" />
          </div>
          <Bracket className="facts-bracket" style={{ marginTop: 40 }} />
          <ul className="grid-3 stagger" style={{ listStyle: "none", marginTop: 28 }}>
            {go2market.map((g) => (
              <li key={g.title} className="thought">
                <h3>{g.title}</h3>
                <p>{g.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="section" aria-labelledby="team-title" style={{ paddingTop: 24 }}>
        <div className="sheet">
          <div className="split">
            <div>
              <p className="eyebrow">
                <ShortArrow /> The team
              </p>
              <h2 id="team-title" className="h-section">Three BCA students who got tired of the complaint book.</h2>
            </div>
            <p className="ink-muted" style={{ alignSelf: "end" }}>
              BCA, School of Computer Science &amp; IT — JAIN (Deemed-to-be
              University), 2026–27.
            </p>
          </div>
          <ul className="team">
            {team.map((m, i) => (
              <li key={m.id}>
                <div className="portrait">
                  <span className="tape" aria-hidden="true" />
                  <Face variant={i} />
                </div>
                <h3>{m.name}</h3>
                <p className="role">Founding team</p>
              </li>
            ))}
          </ul>
          <Users style={{ maxWidth: 220, margin: "56px auto 0" }} className="blue" />
        </div>
      </section>

      <section className="closing" aria-labelledby="about-closing">
        <div className="sheet">
          <Sparkle style={{ width: 64, height: 64, marginBottom: 20 }} className="red" />
          <h2 id="about-closing">Organised. Accountable. Efficient.</h2>
          <p>
            That&apos;s the campus we&apos;re building toward. Let&apos;s talk
            about yours.
          </p>
          <div className="hero-actions">
            <Link href="/demo" className="btn btn--solid">
              Get in touch
            </Link>
            <Link href="/product" className="link-hand">
              See the product
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
