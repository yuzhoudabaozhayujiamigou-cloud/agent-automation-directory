import Link from "next/link";
import { getAllTools } from "@/lib/tools";

const FAST_SUBMISSION_URL = process.env.NEXT_PUBLIC_STRIPE_FAST_SUBMISSION_URL;
const FEATURED_URL = process.env.NEXT_PUBLIC_STRIPE_FEATURED_URL;

export default function HomePage() {
  const tools = getAllTools();
  const featured = tools.filter((t) => t.featured);
  const regular = tools.filter((t) => !t.featured);

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

      {featured.length ? (
        <section id="featured" className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ marginTop: 0 }}>Featured</h2>
          <div className="grid">
            {featured.map((t) => (
              <article key={t.slug} className="card">
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                  <strong>{t.name}</strong>
                  <span className="badge">⭐ Featured</span>
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
          </div>
        </section>
      ) : null}

      <section className="grid">
        {regular.map((t) => (
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
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>$19 Fast submission</h3>
            <p className="small">Listed within 48 hours (manual review). Basic fields + up to 1 tag.</p>
            <ul className="small" style={{ lineHeight: 1.7 }}>
              <li>Great for new launches and quick visibility.</li>
              <li>We reject spam/low-quality tools and refund.</li>
            </ul>
            {FAST_SUBMISSION_URL ? (
              <a className="btn primary" href={FAST_SUBMISSION_URL} target="_blank" rel="noreferrer">
                Pay & submit
              </a>
            ) : (
              <Link className="btn primary" href="/submit">
                Submit
              </Link>
            )}
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>$99 Featured</h3>
            <p className="small">Featured placement for 30 days + extra tags. Limited slots.</p>
            <ul className="small" style={{ lineHeight: 1.7 }}>
              <li>Featured badge + top placement.</li>
              <li>Up to 5 tags to improve discovery.</li>
            </ul>
            {FEATURED_URL ? (
              <a className="btn primary" href={FEATURED_URL} target="_blank" rel="noreferrer">
                Get featured
              </a>
            ) : (
              <Link className="btn primary" href="/submit">
                Request featured
              </Link>
            )}
          </div>
        </div>

        <p className="small" style={{ marginTop: 12 }}>
          Refund policy: if we reject your submission due to quality/spam, we refund.
        </p>
      </section>

      <footer className="small" style={{ marginTop: 16, opacity: 0.8 }}>
        Disclaimer: This directory is provided as-is. We don’t guarantee accuracy or endorse listed tools.
      </footer>
    </main>
  );
}
