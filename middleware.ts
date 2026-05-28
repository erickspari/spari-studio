import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // TEMPORAIRE - Option A pending (useTranslations pas encore câblé sur tous les composants)
  // Redirige toute requête /en/* vers /fr/* tant que la version anglaise n'est pas activée.
  // Pour réactiver l'anglais : supprimer ce bloc et relancer npm run build.
  if (pathname.startsWith("/en")) {
    const frPath = pathname.replace(/^\/en/, "/fr") || "/fr";
    const url = request.nextUrl.clone();
    url.pathname = frPath;
    return NextResponse.redirect(url, { status: 307 });
  }

  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except internals and static files
  matcher: ["/((?!_next|_vercel|api|.*\\..*).*)"]
};
