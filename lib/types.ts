export type Pricing = "Free" | "Trial" | "Paid";

export type Category =
  | "Agent frameworks"
  | "Automation platforms"
  | "Web scraping & extraction"
  | "SEO & content ops"
  | "DevOps & monitoring"
  | "Data & search";

export type Tool = {
  slug: string;
  name: string;
  url: string;
  category: Category;
  pricing: Pricing;
  useCase: string;
  bestFor: string[];
  tags: string[];
  featured: boolean;
  addedAt: string; // YYYY-MM-DD
};
