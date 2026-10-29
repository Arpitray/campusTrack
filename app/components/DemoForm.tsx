"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { Check } from "./Doodles";

type Errors = Partial<Record<"name" | "institution" | "email", string>>;

const planLabels: Record<string, string> = {
  basic: "Basic plan",
  professional: "Professional plan",
  enterprise: "Enterprise plan",
};

export default function DemoForm() {
  const params = useSearchParams();
  const planParam = params.get("plan") ?? "";
  const [errors, setErrors] = useState<Errors>({});
  const [sentTo, setSentTo] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please tell us your name.";
    if (!String(data.get("institution") ?? "").trim())
      next.institution = "Which institution are you from?";
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email doesn't look right.";

    setErrors(next);
    const firstBad = Object.keys(next)[0];
    if (firstBad) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }
    setSentTo(email);
    requestAnimationFrame(() => successRef.current?.focus());
  }

  if (sentTo) {
    return (
      <div ref={successRef} tabIndex={-1} className="note-yellow success-note tilt-r" role="status">
        <span className="tape" aria-hidden="true" />
        <h2>
          Thanks — noted! <Check style={{ display: "inline", width: 34, height: 34, color: "var(--dp-color-accent)" }} />
        </h2>
        <p>
          We&apos;ll reach out at <strong>{sentTo}</strong> to set up a live
          demo for your campus.
        </p>
      </div>
    );
  }

  const field = (name: keyof Errors) => ({
    name,
    id: `f-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `f-${name}-err` : undefined,
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="form-grid">
      <div className="field">
        <label htmlFor="f-name">Your name</label>
        <input className="input" autoComplete="name" {...field("name")} />
        {errors.name && <p id="f-name-err" className="field-error">{errors.name}</p>}
      </div>
      <div className="field">
        <label htmlFor="f-role">Your role</label>
        <select id="f-role" name="role" className="select" defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          <option>Principal / Director</option>
          <option>Administrator / Registrar</option>
          <option>Facilities / Estate manager</option>
          <option>IT / Maintenance head</option>
          <option>Faculty / HoD</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-institution">Institution</label>
        <input className="input" autoComplete="organization" {...field("institution")} />
        {errors.institution && (
          <p id="f-institution-err" className="field-error">{errors.institution}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="f-email">Work email</label>
        <input className="input" type="email" autoComplete="email" {...field("email")} />
        {errors.email && <p id="f-email-err" className="field-error">{errors.email}</p>}
      </div>
      <div className="field">
        <label htmlFor="f-assets">Roughly how many assets?</label>
        <select id="f-assets" name="assets" className="select" defaultValue="">
          <option value="" disabled>
            Choose a range
          </option>
          <option>Under 250</option>
          <option>250 – 1,000</option>
          <option>1,000 – 5,000</option>
          <option>More than 5,000</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-interest">I&apos;m interested in</label>
        <select
          id="f-interest"
          name="interest"
          className="select"
          defaultValue={planLabels[planParam] ?? "A live demo"}
        >
          <option>A live demo</option>
          <option>A pilot in one department</option>
          <option>Basic plan</option>
          <option>Professional plan</option>
          <option>Enterprise plan</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="f-message">What would you like to track?</label>
        <textarea
          id="f-message"
          name="message"
          className="textarea"
          placeholder="e.g. projectors and lab PCs across 3 blocks"
        />
        <p className="field-hint">Optional, but it helps us tailor the demo.</p>
      </div>
      <div className="full">
        <button type="submit" className="btn btn--solid">
          Request my demo
        </button>
      </div>
    </form>
  );
}
