import Link from "next/link";
import { getAllTools } from "@/lib/tools";

export default function HomePage() {
  const tools = getAllTools();

  return (
    <main className="container">
      <header className="card" style={{ marginBottom: 16 }}>
        <div className="badge">📚 Directory · Agents & Automation</div>
        <h1 style={{ margin: "12px 0 6px" }}>Agent & Automation Tools Directory</h1>
        <p className="small" style={{ marginTop: 0 }}>
          Curated tools for agent frameworks, automation platforms, scraping, SEO ops, and developer workflows.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          <Link className="btn primary" href="/submit">
            Submit your tool
          </Link>
          <a className="btn" href="#pricing">
            Pricing
          </a>
        </div>
      </header>

      <section className="grid">
        {tools.map((t) => (
          <article key={t.slug} className="card">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <strong>{t.name}</strong>
              {t.featured ? <span className="badge">⭐ Featured</span> : null}
            </div>
            <p className="small" style={{ margin: "10px 0" }}>
              {t.useCase}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="badge">{t.category}</span>
              <span className="badge">{t.pricing}</span>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
              <Link className="btn" href={`/tools/${t.slug}`}>
                Details
              </Link>
              <a className="btn" href={t.url} target="_blank" rel="noreferrer">
                Visit
              </a>
            </div>
          </article>
        ))}
      </section>

      <section id="pricing" className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Pricing</h2>
        <ul className="small" style={{ lineHeight: 1.7 }}>
          <li>
            <strong>$19 Fast submission</strong> — listed within 48 hours (basic fields).
          </li>
          <li>
            <strong>$99 Featured</strong> — featured placement for 30 days + extra tags.
          </li>
        </ul>
        <p className="small">
          (Next step: we’ll hook these buttons to Stripe Payment Links. For now, the submit form collects requests.)
        </p>
      </section>

      <footer className="small" style={{ marginTop: 16, opacity: 0.8 }}>
        Built for speed: static JSON now, database later.
      </footer>
    </main>
  );
}
