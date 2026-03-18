import Link from "next/link";

const FAST_SUBMISSION_URL = process.env.NEXT_PUBLIC_STRIPE_FAST_SUBMISSION_URL;
const FEATURED_URL = process.env.NEXT_PUBLIC_STRIPE_FEATURED_URL;

export const metadata = {
  title: "Submit | Agent & Automation Directory",
  description:
    "Submit a tool to the directory or request our Photo→3D (GLB) service for e-commerce. Manual review, clear guidelines, and transparent refund/rework policy.",
};

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

export default function SubmitPage() {
  return (
    <main className="container">
      <Card>
        <div className="badge">Submit</div>
        <h1 style={{ marginTop: 12 }}>Choose what to submit</h1>
        <p className="small">
          Two paths: submit a tool to the directory, or request our <strong>Photo → 3D (GLB)</strong> service.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 14 }}>
          <Card>
            <h2 style={{ marginTop: 0 }}>A) Submit a tool (directory)</h2>
            <p className="small">
              We manually review tool submissions to keep the directory useful. If we reject your paid submission due to spam or
              low quality, we refund.
            </p>

            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 12 }}>
              <Card>
                <h3 style={{ marginTop: 0 }}>$19 Fast submission</h3>
                <p className="small">Listed within 48 hours. Basic fields + up to 1 tag.</p>
                {FAST_SUBMISSION_URL ? (
                  <a className="btn primary" href={FAST_SUBMISSION_URL} target="_blank" rel="noreferrer">
                    Pay & submit
                  </a>
                ) : (
                  <p className="small">(Payment link not configured yet.)</p>
                )}
              </Card>

              <Card>
                <h3 style={{ marginTop: 0 }}>$99 Featured</h3>
                <p className="small">Featured placement for 30 days + extra tags. Limited slots.</p>
                {FEATURED_URL ? (
                  <a className="btn primary" href={FEATURED_URL} target="_blank" rel="noreferrer">
                    Get featured
                  </a>
                ) : (
                  <p className="small">(Payment link not configured yet.)</p>
                )}
              </Card>
            </div>

            <h3 style={{ marginTop: 16 }}>Guidelines</h3>
            <ul className="small" style={{ lineHeight: 1.7 }}>
              <li>Tool must be relevant to agents, automation, scraping, SEO ops, or developer workflows.</li>
              <li>No spam, no link farms, no keyword-stuffed landing pages.</li>
              <li>We may edit your description for clarity and consistency.</li>
            </ul>
          </Card>

          <Card>
            <h2 style={{ marginTop: 0 }}>B) Request Photo → 3D (GLB)</h2>
            <p className="small">
              Send one product photo (or a link) and we deliver a <strong>web-ready GLB</strong> + <strong>8–12s turntable</strong> within 48 hours.
              We do manual QA and optimization.
            </p>

            <h3 style={{ marginTop: 14 }}>What we need from you (copy/paste)</h3>
            <pre className="small" style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
{`Contact (email / Telegram):
Product name:
Product URL (optional):
Photo link (Google Drive / Dropbox / direct URL):
Material type (normal / metal / glass):
Use case (product page / ads / 3D viewer):
Notes (angles, must-keep details):`}
            </pre>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <Link className="btn primary" href="/photo-to-3d">
                View service page
              </Link>
              <a className="btn" href="mailto:hello@agentautomation.tools?subject=Photo%20to%203D%20request&body=Contact%20(email%20/%20Telegram):%0AProduct%20name:%0AProduct%20URL%20(optional):%0APhoto%20link:%0AMaterial%20type%20(normal%20/%20metal%20/%20glass):%0AUse%20case%20(product%20page%20/%20ads%20/%203D%20viewer):%0ANotes:%0A">
                Email request (template)
              </a>
            </div>

            <p className="small" style={{ marginTop: 12, opacity: 0.85 }}>
              Payment links coming soon. For now, send the details via email using the template above (or message the owner).
            </p>

            <h3 style={{ marginTop: 16 }}>Input rules (avoid failed outputs)</h3>
            <ul className="small" style={{ lineHeight: 1.7 }}>
              <li>Prefer clean background and good lighting.</li>
              <li>Minimize occlusion; show the product clearly.</li>
              <li>Single-image limits apply: backsides/hidden geometry may be guessed.</li>
            </ul>

            <h3 style={{ marginTop: 16 }}>Refund / rework</h3>
            <p className="small">
              If the output doesn’t meet agreed acceptance criteria, we offer rework or a refund (based on input guidelines and QA checks).
            </p>
          </Card>
        </div>

        <div style={{ marginTop: 14 }}>
          <Link className="btn" href="/">
            Back to directory
          </Link>
        </div>
      </Card>
    </main>
  );
}
