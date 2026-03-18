import Link from "next/link";

export const metadata = {
  title: "Photo to 3D (GLB) for E-commerce | 48h delivery",
  description:
    "Turn a single product photo into a web-ready 3D model (GLB) + turntable video. Manual QA and optimization. Rework or refund if it doesn't meet acceptance criteria.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}

export default function PhotoTo3DPage() {
  return (
    <main className="container">
      <header className="card" style={{ marginBottom: 16 }}>
        <Badge>Service</Badge>
        <h1 style={{ margin: "12px 0 6px" }}>Photo → 3D (GLB) for E-commerce</h1>
        <p className="small" style={{ marginTop: 0 }}>
          Within 48 hours, we deliver a <strong>web-ready GLB</strong> plus an <strong>8–12s turntable video</strong>, with manual QA and
          optimization for file size, polycount, and textures.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          <Link className="btn primary" href="/submit">
            Submit a product photo
          </Link>
          <a className="btn" href="#examples">
            Examples
          </a>
          <a className="btn" href="#pricing">
            Pricing
          </a>
          <a className="btn" href="#faq">
            FAQ
          </a>
        </div>

        <p className="small" style={{ marginTop: 12, opacity: 0.85 }}>
          Payment links coming soon. For now, submit via the form and we’ll confirm the plan + delivery time.
        </p>
      </header>

      <section className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>What you get</h2>
        <ul className="small" style={{ lineHeight: 1.7 }}>
          <li>
            <strong>GLB model</strong> optimized for the web (size, polycount, texture compression where appropriate).
          </li>
          <li>
            <strong>Turntable video</strong> (8–12 seconds) suitable for product pages and ads.
          </li>
          <li>
            <strong>Viewer-ready preview</strong> so you can share a link internally before publishing.
          </li>
        </ul>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Best for</h3>
            <ul className="small" style={{ lineHeight: 1.7 }}>
              <li>New product launches</li>
              <li>Ads creatives needing 3D motion</li>
              <li>Teams without in-house 3D artists</li>
            </ul>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Not ideal (single-image limits)</h3>
            <ul className="small" style={{ lineHeight: 1.7 }}>
              <li>Hidden geometry (backsides) not visible in the photo</li>
              <li>Heavy occlusion</li>
              <li>Challenging materials like glass / mirror-like surfaces</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="examples" className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Examples</h2>
        <p className="small">
          We’ll add real samples here as we deliver the first batch. If you want a quick quality check, submit one item and we’ll share a preview link.
        </p>
      </section>

      <section id="pricing" className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Pricing</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>$9 per item</h3>
            <p className="small">48h delivery, one photo input, GLB + turntable video.</p>
            <Link className="btn primary" href="/submit">
              Submit
            </Link>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>$49 per 10 items</h3>
            <p className="small">Batch processing, best for ads and catalogs.</p>
            <Link className="btn primary" href="/submit">
              Submit batch
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="card">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>

        <h3>Is this “research-grade” or production-ready?</h3>
        <p className="small">
          We track research trends (e.g., Apple LiTo: better view-dependent highlights/reflections), but our delivery is workflow-first: we optimize assets so they
          can actually ship.
        </p>

        <h3>Refund / rework policy?</h3>
        <p className="small">
          If the output doesn’t meet the agreed acceptance criteria, we offer rework or a refund. Single-image limits apply (backsides/occlusion/materials).
        </p>

        <h3>What makes a good input photo?</h3>
        <p className="small">Front/hero shot, clean background, minimal occlusion, good lighting. The clearer the shape, the better the 3D.</p>

        <div style={{ marginTop: 14 }}>
          <Link className="btn" href="/">
            Back to directory
          </Link>
        </div>
      </section>

      <footer className="small" style={{ marginTop: 16, opacity: 0.8 }}>
        Disclaimer: Single-image 3D has inherent uncertainty. We’ll be explicit about limitations, and we won’t overpromise.
      </footer>
    </main>
  );
}
