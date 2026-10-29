import { NumberCircle, ShortArrow } from "./Doodles";

const stages = [
  { title: "Reported", body: "Staff scan the asset and tap “Report issue”." },
  { title: "Ticket created", body: "Linked to the asset, its location and category." },
  { title: "Assigned", body: "Routed to the right maintenance or IT technician." },
  { title: "In progress", body: "Everyone can see the fix is underway." },
  { title: "Resolved", body: "The technician marks the job done." },
  { title: "Verified by staff", body: "The person who reported it confirms the fix." },
];

export default function ProcessStrip() {
  return (
    <section className="strip" aria-labelledby="flow-title">
      <div className="sheet">
        <p className="eyebrow">
          <ShortArrow /> Asset &amp; ticket life cycle
        </p>
        <h2 id="flow-title" className="h-section" style={{ maxWidth: "20ch" }}>
          From &ldquo;it&apos;s broken&rdquo; to{" "}
          <span className="red">&ldquo;it&apos;s fixed&rdquo;</span> — and
          nobody has to chase.
        </h2>
        <ol className="steps">
          {stages.map((s, i) => (
            <li key={s.title}>
              <span className="step-num">
                <NumberCircle />
                {i + 1}
              </span>
              {i < stages.length - 1 && <ShortArrow className="step-arrow" />}
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
