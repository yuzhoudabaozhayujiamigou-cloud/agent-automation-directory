import Link from "next/link";

export const metadata = {
  title: "Photo to 3D (GLB) for E-commerce | 48h delivery",
  description:
    "Turn one (or a few) product photos into a web-ready 3D model (GLB) plus an 8–12s turntable video. Human-in-the-loop QA and optimization. Clear rework/refund policy.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}

export default function PhotoTo3DPage() {
  return (
    <main className="container">
      <header className="card" style={{ marginBottom: 16 }}>
        <Badge>Service</Badge>
        <h1 style={{ margin: "12px 0 6px" }}>Turn a product photo into a clean 3D model (GLB) — in 48 hours.</h1>
        <p className="small" style={{ marginTop: 0 }}>
          Send one or a few photos. We’ll build a <strong>web-ready GLB</strong> and a short <strong>8–12s turntable video</strong>, then
          manually QA and optimize it for e-commerce use.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          <Link className="btn primary" href="/submit">
            Submit photos for a quote
          </Link>
          <a className="btn" href="#deliverables">
            Deliverables
          </a>
          <a className="btn" href="#faq">
            FAQ
          </a>
        </div>

        <p className="small" style={{ marginTop: 12, opacity: 0.85 }}>
          Tell us what the product is, share your photos, and your target use (Shopify/website/AR). We’ll confirm feasibility and
          price before we start.
        </p>

        <p className="small" style={{ marginTop: 10, opacity: 0.85 }}>
          Not happy with the first pass? We’ll do <strong>one revision round</strong> — or refund if we can’t meet the agreed target.
        </p>
      </header>

      <section id="deliverables" className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>What you get</h2>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Outputs</h3>
            <ul className="small" style={{ lineHeight: 1.7 }}>
              <li>
                <strong>GLB</strong> (web-friendly 3D model)
              </li>
              <li>
                <strong>8–12s turntable video</strong> for product pages and ads
              </li>
            </ul>
            <p className="small" style={{ opacity: 0.85 }}>
              If you have a preferred background or lighting style, include a reference.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Why it’s useful</h3>
            <ul className="small" style={{ lineHeight: 1.7 }}>
              <li>
                <strong>Faster listings & richer visuals:</strong> add a 3D spin without a full 3D pipeline.
              </li>
              <li>
                <strong>Built for the web:</strong> practical optimization so it loads reasonably and looks consistent.
              </li>
              <li>
                <strong>Human-in-the-loop quality:</strong> we check geometry, textures, and presentation before delivery.
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Limits (be transparent)</h3>
            <ul className="small" style={{ lineHeight: 1.7 }}>
              <li>
                <strong>Input limits output:</strong> blurry/low-light/occluded photos can’t produce accurate details.
              </li>
              <li>
                <strong>Hard categories:</strong> transparent/reflective/glossy, hair/fur, intricate cutouts.
              </li>
              <li>
                <strong>Expectation:</strong> commerce-ready, not cinematic VFX or engineering-grade precision.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="card">
        <h2 style={{ marginTop: 0 }}>FAQ</h2>

        <h3>What do I need to send you?</h3>
        <p className="small">
          Ideally 3–8 clear photos (front/back/sides + one close-up). If you only have one photo, we can still try — we’ll tell you up front what will be guessed vs. what
          will be accurate.
        </p>

        <h3>What exactly do I get back?</h3>
        <p className="small">
          A <strong>GLB</strong> file plus an <strong>8–12 second turntable video</strong> suitable for product pages and ads.
        </p>

        <h3>How long does it take?</h3>
        <p className="small">
          Typical delivery is <strong>within 48 hours</strong> after we confirm feasibility and you approve the quote. If the product is unusually complex, we’ll give a realistic ETA before starting.
        </p>

        <h3>What’s your rework / refund policy?</h3>
        <p className="small">
          You get <strong>one revision round</strong> (reasonable tweaks to shape/texture/presentation). If we can’t reach the agreed “commerce-ready” target after that, we’ll <strong>refund</strong>.
        </p>

        <div style={{ marginTop: 14 }}>
          <Link className="btn" href="/submit">
            Submit photos
          </Link>
          <span style={{ marginLeft: 10, opacity: 0.8 }} className="small">
            Or go back to the <Link href="/">directory</Link>.
          </span>
        </div>
      </section>

      <footer className="small" style={{ marginTop: 16, opacity: 0.8 }}>
        Disclaimer: Best-effort conversion from photos. Some products may require simplification or artistic interpretation.
        We’ll flag risks before starting and won’t overpromise accuracy we can’t verify from your inputs.
      </footer>
    </main>
  );
}
