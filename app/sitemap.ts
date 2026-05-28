import type { MetadataRoute } from "next";

const base = "https://sparistudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    "",
    "/services",
    "/expertise",
    "/demos",
    "/a-propos",
    "/contact"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}
