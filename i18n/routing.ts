import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  pathnames: {
    "/": "/",
    "/services": "/services",
    "/expertise": "/expertise",
    "/demos": "/demos",
    "/contact": "/contact",
    "/a-propos": {
      fr: "/a-propos",
      en: "/about",
    },
  },
});
