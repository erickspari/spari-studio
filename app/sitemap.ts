import type { MetadataRoute } from "next";

const base = "https://sparistudio.com";

const sharedPaths = ["", "/services", "/expertise", "/demos", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of ["fr", "en"]) {
    for (const path of sharedPaths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
    // Chemin localisé : /fr/a-propos — /en/about
    entries.push({
      url: locale === "fr"
        ? `${base}/fr/a-propos`
        : `${base}/en/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
