"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, NumberCircle, QRSticker, SideArrow } from "./Doodles";

const AUTO_STEPS = [
  "Creates a maintenance ticket linked to Asset P-104",
  "Tags the location (Lab 3) and category (AV Equipment)",
  "Assigns it to the correct maintenance / IT team",
  "Notifies the admin and the staff member who reported it",
  "Tracks the ticket until it is resolved and verified",
];

type Stage = "scanned" | "reporting" | "reported";

export default function ScanDemo() {
  const [stage, setStage] = useState<Stage>("scanned");
  const [issue, setIssue] = useState("Projector isn't working.");
  const [done, setDone] = useState(0);
  const textareaId = useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (stage === "reporting") textareaRef.current?.focus();
    if (stage !== "reported") return;

    // Reduced motion: tick everything at once instead of one by one.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers = AUTO_STEPS.map((_, i) =>
      window.setTimeout(() => setDone(i + 1), reduce ? 0 : 380 * (i + 1)),
    );
    return () => timers.forEach(clearTimeout);
  }, [stage]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!issue.trim()) return;
    setDone(0);
    setStage("reported");
  }

  function reset() {
    setStage("scanned");
    setDone(0);
    setIssue("Projector isn't working.");
  }

  const faulty = stage === "reported";

  return (
    <div className="demo-wrap">
      <div className="phone" aria-label="CampusTrack staff app, example scan">
        <div className="phone-notch" aria-hidden="true" />
        <div className="scan-card">
          <div className="scan-head">
            <div>
              <span className="scan-tag">Scanned just now</span>
              <h3>Projector P-104</h3>
            </div>
            <QRSticker className="scan-qr" />
          </div>
          <dl className="kv">
            <dt>Category</dt>
            <dd>AV Equipment</dd>
            <dt>Assigned to</dt>
            <dd>Lab 3</dd>
            <dt>Last maintenance</dt>
            <dd>12 Aug</dd>
            <dt>Next due</dt>
            <dd>12 Nov</dd>
            <dt>Condition</dt>
            <dd>
              <span className={`status-good${faulty ? " status-fault" : ""}`}>
                {faulty ? "Fault reported" : "Good"}
              </span>
            </dd>
          </dl>

          {stage === "scanned" && (
            <div className="scan-actions">
              <button
                type="button"
                className="btn"
                onClick={() => setStage("reporting")}
              >
                Report issue
              </button>
            </div>
          )}

          {stage === "reporting" && (
            <form className="report-form scan-actions" onSubmit={submit}>
              <div className="field">
                <label htmlFor={textareaId}>What&apos;s wrong?</label>
                <textarea
                  id={textareaId}
                  ref={textareaRef}
                  className="textarea"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn">
                Send report
              </button>
              <button
                type="button"
                className="link-hand btn-text"
                onClick={reset}
              >
                Cancel
              </button>
            </form>
          )}

          {stage === "reported" && (
            <div className="scan-actions">
              <p style={{ fontSize: "var(--dp-typography-detail)" }}>
                Ticket <strong>#T-2611</strong> raised. You&apos;ll be notified
                as it moves.
              </p>
              <button
                type="button"
                className="btn btn--ink btn--small"
                onClick={reset}
              >
                Scan again
              </button>
            </div>
          )}
        </div>
      </div>

      <div>
        <p className="eyebrow">
          <NumberCircle style={{ width: 26, height: 26 }} />
          Try it — this is what one tap does
        </p>
        <h3 className="h-sub">
          {stage === "reported" ? (
            <>
              Reported. <span className="red">CampusTrack takes it from here.</span>
            </>
          ) : (
            <>Tap &ldquo;Report issue&rdquo; on the scanned projector.</>
          )}
        </h3>

        <ol className="auto-steps" style={{ marginTop: 26 }} aria-live="polite">
          {AUTO_STEPS.map((s, i) => (
            <li key={s} data-done={i < done}>
              <Check />
              <span>
                {s}
                {i < done && <span className="sr-only"> — done</span>}
              </span>
            </li>
          ))}
        </ol>

        {stage === "reported" && done === AUTO_STEPS.length && (
          <div className="scrap ticket-slip tilt-r">
            <span className="tape tape--left" aria-hidden="true" />
            <dl className="kv">
              <dt>Ticket</dt>
              <dd>#T-2611 · Asset P-104</dd>
              <dt>Issue</dt>
              <dd>&ldquo;{issue.trim()}&rdquo;</dd>
              <dt>Location</dt>
              <dd>Lab 3 · AV Equipment</dd>
              <dt>Status</dt>
              <dd className="blue">Ticket created → assigned</dd>
            </dl>
          </div>
        )}

        <p className="margin-note">
          <SideArrow />
          No phone calls, no complaint book, no chasing. Just a permanent,
          searchable history for every asset.
        </p>
      </div>
    </div>
  );
}
