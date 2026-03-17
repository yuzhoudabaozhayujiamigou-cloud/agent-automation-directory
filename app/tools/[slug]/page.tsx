import Link from "next/link";
import { getToolBySlug } from "@/lib/tools";

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return (
      <main className="container">
        <div className="card">
          <h1 style={{ marginTop: 0 }}>Not found</h1>
          <p className="small">No tool matches this slug.</p>
          <Link className="btn" href="/">
            Back
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="card">
        <div className="badge">{tool.category}</div>
        <h1 style={{ margin: "12px 0 6px" }}>{tool.name}</h1>
        <p className="small" style={{ marginTop: 0 }}>
          {tool.useCase}
        </p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "12px 0" }}>
          <span className="badge">Pricing: {tool.pricing}</span>
          {tool.featured ? <span className="badge">⭐ Featured</span> : null}
          {tool.tags.map((tag) => (
            <span key={tag} className="badge">
              #{tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="btn primary" href={tool.url} target="_blank" rel="noreferrer">
            Visit website
          </a>
          <Link className="btn" href="/">
            Back to directory
          </Link>
        </div>
      </div>
    </main>
  );
}
