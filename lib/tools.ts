import tools from "@/data/tools.json";
import type { Tool } from "@/lib/types";

export function getAllTools(): Tool[] {
  return tools as Tool[];
}

export function getToolBySlug(slug: string): Tool | undefined {
  return getAllTools().find((t) => t.slug === slug);
}
