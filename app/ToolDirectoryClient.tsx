"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Tool } from "@/lib/types";

function unique<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export default function ToolDirectoryClient({ tools }: { tools: Tool[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [pricing, setPricing] = useState("All");

  // Initialize state from URL query params on first load / when user navigates via back/forward.
  useEffect(() => {
    const nextQ = searchParams.get("q") ?? "";
    const nextCategory = searchParams.get("category") ?? "All";
    const nextPricing = searchParams.get("pricing") ?? "All";

    setQ(nextQ);
    setCategory(nextCategory);
    setPricing(nextPricing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Keep URL in sync with state (shallow navigation, no full reload).
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    const trimmedQ = q.trim();
    if (trimmedQ) params.set("q", trimmedQ);
    else params.delete("q");

    if (category && category !== "All") params.set("category", category);
    else params.delete("category");

    if (pricing && pricing !== "All") params.set("pricing", pricing);
    else params.delete("pricing");

    const next = params.toString();
    const curr = searchParams.toString();
    if (next === curr) return;

    router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
  }, [q, category, pricing, pathname, router, searchParams]);

  const categories = useMemo(() => ["All", ...unique(tools.map((t) => t.category)).sort()], [tools]);
  const pricings = useMemo(() => ["All", ...unique(tools.map((t) => t.pricing)).sort()], [tools]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return tools.filter((t) => {
      if (category !== "All" && t.category !== category) return false;
      if (pricing !== "All" && t.pricing !== pricing) return false;

      if (!query) return true;
      const hay = [
        t.name,
        t.useCase,
        t.bestFor?.join(" ") ?? "",
        t.tags?.join(" ") ?? "",
        t.category,
        t.pricing,
      ]
        .join(" | ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [tools, q, category, pricing]);

  return (
    <>
      <section className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Search & filters</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search tools (name, tags, use case…)"
            style={{ flex: "1 1 260px", padding: "10px 12px", borderRadius: 10, border: "1px solid #2a2a2a" }}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ flex: "0 1 220px", padding: "10px 12px", borderRadius: 10, border: "1px solid #2a2a2a" }}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            style={{ flex: "0 1 160px", padding: "10px 12px", borderRadius: 10, border: "1px solid #2a2a2a" }}
          >
            {pricings.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="btn"
            onClick={() => {
              setQ("");
              setCategory("All");
              setPricing("All");
              router.replace(pathname, { scroll: false });
            }}
          >
            Clear
          </button>

          <div className="small" style={{ alignSelf: "center", opacity: 0.8 }}>
            Showing <strong>{filtered.length}</strong> / {tools.length}
          </div>
        </div>
      </section>

      <section className="grid">
        {filtered.map((t) => (
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
    </>
  );
}
