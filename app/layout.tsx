import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent & Automation Tools Directory",
  description:
    "A curated directory of agent frameworks and automation tools. Submit your tool to get listed or featured.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
