import type { MetadataRoute } from "next";

const BASE_URL = "https://sparistudio.com";

// Each route maps a logical page to its per-locale path.
// Kept in sync with the live route set: /a-propos is localized as /about in EN.
const routes: { fr: string; en: string }[] = [
  { fr: "", en: "" },
  { fr: "/services", en: "/services" },
  { fr: "/expertise", en: "/expertise" },
  { fr: "/demos", en: "/demos" },
  { fr: "/contact", en: "/contact" },
  { fr: "/a-propos", en: "/about" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  entries.push({
    url: BASE_URL,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1.0,
  });

  for (const route of routes) {
    const isHome = route.fr === "";
    for (const locale of ["fr", "en"] as const) {
      entries.push({
        url: `${BASE_URL}/${locale}${route[locale]}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: isHome ? 0.9 : 0.7,
        alternates: {
          languages: {
            fr: `${BASE_URL}/fr${route.fr}`,
            en: `${BASE_URL}/en${route.en}`,
            "x-default": `${BASE_URL}/fr${route.fr}`,
          },
        },
      });
    }
  }

  return entries;
}
