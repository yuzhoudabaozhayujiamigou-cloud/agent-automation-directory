import Link from "next/link";
import { getAllTools } from "@/lib/tools";
import ToolDirectoryClient from "./ToolDirectoryClient";

const FAST_SUBMISSION_URL = process.env.NEXT_PUBLIC_STRIPE_FAST_SUBMISSION_URL;
const FEATURED_URL = process.env.NEXT_PUBLIC_STRIPE_FEATURED_URL;

export default function HomePage() {
  const tools = getAllTools();

  return (
    <main className="container">
      <header className="card" style={{ marginBottom: 16 }}>
        <div className="badge">📚 Directory · Agents & Automation</div>
        <h1 style={{ margin: "12px 0 6px" }}>Agent & Automation Tools Directory</h1>
        <p className="small" style={{ marginTop: 0 }}>
          Curated tools for agent frameworks, automation platforms, scraping, SEO ops, and developer workflows.
          <br />
          Submit your tool to get listed — or featured.
        </p>

        <ul className="small" style={{ lineHeight: 1.7, marginTop: 12 }}>
          <li>Founder-to-founder curation: no spam, no link farms.</li>
          <li>Simple taxonomy so people can find tools fast.</li>
          <li>Featured slots are limited (we keep the directory useful).</li>
          <li>We reject low-quality submissions — and refund when we do.</li>
          <li>Goal: help builders ship real automation, not demos.</li>
        </ul>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          <Link className="btn primary" href="/submit">
            Submit your tool
          </Link>
          <a className="btn" href="#pricing">
            Pricing
          </a>
          <a className="btn" href="#featured">
            Featured
          </a>
        </div>

        <p className="small" style={{ marginTop: 12 }}>
          Tip: Want the fastest path to listing? Use <strong>Fast submission</strong>.
        </p>
      </header>

      {/* Directory */}
      <ToolDirectoryClient tools={tools} />

      <footer className="small" style={{ marginTop: 16, opacity: 0.8 }}>
        Disclaimer: This directory is provided as-is. We don’t guarantee accuracy or endorse listed tools.
      </footer>
    </main>
  );
}
