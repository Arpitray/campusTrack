"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "./Doodles";

type Billing = "monthly" | "yearly";

const plans = [
  {
    id: "basic",
    name: "Basic",
    monthly: 10000,
    for: "For small institutions with a limited number of assets.",
    features: [
      "QR codes for every asset",
      "Staff scanning app",
      "One-tap fault reporting & tickets",
      "Searchable asset inventory",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    monthly: 20000,
    featured: true,
    for: "For institutions running several departments and labs.",
    features: [
      "Everything in Basic",
      "Preventive maintenance scheduling",
      "Analytics on faults and asset condition",
      "Multi-department dashboards",
      "Audit-ready reports",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: null,
    for: "For large campuses that need CampusTrack wired into existing systems.",
    features: [
      "Everything in Professional",
      "Integration with your existing ERP",
      "Configured for large asset volumes",
      "Pricing tailored to your campus",
    ],
  },
] as const;

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function PlanLedger() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [selected, setSelected] = useState<string>("professional");

  return (
    <>
      <fieldset className="toggle" style={{ marginTop: 36 }}>
        <legend>Show prices</legend>
        {(["monthly", "yearly"] as const).map((b) => (
          <label key={b}>
            <input
              type="radio"
              name="billing"
              value={b}
              checked={billing === b}
              onChange={() => setBilling(b)}
            />
            <span>{b === "monthly" ? "Per month" : "Per year"}</span>
          </label>
        ))}
      </fieldset>

      <ul className="ledger" style={{ listStyle: "none" }}>
        {plans.map((p) => {
          const isSelected = selected === p.id;
          return (
            <li
              key={p.id}
              className={`scrap plan${"featured" in p && p.featured ? " plan--featured" : ""}`}
            >
              {"featured" in p && p.featured && (
                <span className="plan-flag">most picked</span>
              )}
              <div>
                <h3>{p.name}</h3>
                <p className="for">{p.for}</p>
              </div>
              <p className="price">
                {p.monthly === null ? (
                  "Custom"
                ) : billing === "monthly" ? (
                  <>
                    {inr(p.monthly)}
                    <small>/ month</small>
                  </>
                ) : (
                  <>
                    {inr(p.monthly * 12)}
                    <small>/ year</small>
                  </>
                )}
              </p>
              <ul className="check-list">
                {p.features.map((f) => (
                  <li key={f}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: "grid", gap: 10 }}>
                <button
                  type="button"
                  className={`btn${isSelected ? " btn--solid" : " btn--ink"}`}
                  aria-pressed={isSelected}
                  onClick={() => setSelected(p.id)}
                >
                  {isSelected ? `${p.name} selected` : `Choose ${p.name}`}
                </button>
                {isSelected && (
                  <Link
                    href={`/demo?plan=${p.id}`}
                    className="link-hand"
                    style={{ justifyContent: "center", fontSize: "var(--dp-typography-detail)" }}
                  >
                    {p.monthly === null ? "Talk to us about Enterprise" : `Book a demo for ${p.name}`}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <p className="fine">
        Prices exclude the one-time setup &amp; onboarding fee. Subscriptions
        are based on the number of assets and users on the platform.
      </p>
    </>
  );
}
