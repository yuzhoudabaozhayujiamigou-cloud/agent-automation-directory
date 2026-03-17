export default function SubmitPage() {
  return (
    <main className="container">
      <div className="card">
        <h1 style={{ marginTop: 0 }}>Submit your tool</h1>
        <p className="small">
          This is the MVP submission page. For now, paste the details and we’ll manually review. Next step is integrating Stripe
          Payment Links for Fast submission / Featured.
        </p>

        <form className="grid" style={{ gridTemplateColumns: "1fr", maxWidth: 680 }}>
          <div>
            <label>Tool name</label>
            <input style={{ width: "100%" }} placeholder="e.g., MyAgentFramework" />
          </div>
          <div>
            <label>URL</label>
            <input style={{ width: "100%" }} placeholder="https://..." />
          </div>
          <div>
            <label>Category</label>
            <select style={{ width: "100%" }} defaultValue="Automation platforms">
              <option>Agent frameworks</option>
              <option>Automation platforms</option>
              <option>Web scraping & extraction</option>
              <option>SEO & content ops</option>
              <option>DevOps & monitoring</option>
              <option>Data & search</option>
            </select>
          </div>
          <div>
            <label>One-line use case</label>
            <input style={{ width: "100%" }} placeholder="What does it do?" />
          </div>
          <div>
            <label>Pricing</label>
            <select style={{ width: "100%" }} defaultValue="Trial">
              <option>Free</option>
              <option>Trial</option>
              <option>Paid</option>
            </select>
          </div>
          <div>
            <label>Contact email (optional)</label>
            <input style={{ width: "100%" }} placeholder="you@company.com" />
          </div>

          <p className="small">
            MVP note: this form is not wired to a backend yet. We’ll connect it to a simple endpoint + storage after we validate demand.
          </p>
        </form>
      </div>
    </main>
  );
}
