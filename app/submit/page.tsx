import Link from "next/link";

const FAST_SUBMISSION_URL = process.env.NEXT_PUBLIC_STRIPE_FAST_SUBMISSION_URL;
const FEATURED_URL = process.env.NEXT_PUBLIC_STRIPE_FEATURED_URL;

export default function SubmitPage() {
  return (
    <main className="container">
      <div className="card">
        <div className="badge">Submit</div>
        <h1 style={{ marginTop: 12 }}>Submit your tool</h1>
        <p className="small">
          We manually review submissions to keep the directory useful. If we reject your submission due to spam or low
          quality, we refund.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: 12 }}>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>$19 Fast submission</h2>
            <p className="small">Listed within 48 hours. Basic fields + up to 1 tag.</p>
            {FAST_SUBMISSION_URL ? (
              <a className="btn primary" href={FAST_SUBMISSION_URL} target="_blank" rel="noreferrer">
                Pay & submit
              </a>
            ) : (
              <p className="small">(Stripe link not configured yet — ask the owner to add it.)</p>
            )}
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>$99 Featured</h2>
            <p className="small">Featured placement for 30 days + extra tags. Limited slots.</p>
            {FEATURED_URL ? (
              <a className="btn primary" href={FEATURED_URL} target="_blank" rel="noreferrer">
                Get featured
              </a>
            ) : (
              <p className="small">(Stripe link not configured yet — ask the owner to add it.)</p>
            )}
          </div>
        </div>

        <h2 style={{ marginTop: 18 }}>Submission guidelines</h2>
        <ul className="small" style={{ lineHeight: 1.7 }}>
          <li>Tool must be relevant to agents, automation, scraping, SEO ops, or developer workflows.</li>
          <li>No spam, no link farms, no keyword-stuffed landing pages.</li>
          <li>We may edit your description for clarity and consistency.</li>
        </ul>

        <div style={{ marginTop: 14 }}>
          <Link className="btn" href="/">
            Back to directory
          </Link>
        </div>
      </div>
    </main>
  );
}
