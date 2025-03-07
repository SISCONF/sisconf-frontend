import { NextRequest, NextResponse } from "next/server";
import { ROUTES, PROTECTED_ROUTES } from "./const/routes";

function redirect(req: NextRequest, url: string) {
  return NextResponse.redirect(new URL(url, req.url));
}

function extractCookies(req: NextRequest) {
  return {
    accessToken: req.cookies.get("access_token")?.value,
    refreshToken: req.cookies.get("refresh_token")?.value,
    userCategory: req.cookies.get("user_category")?.value,
    businessName: req.cookies.get("business_name")?.value,
  };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { accessToken, userCategory, businessName } = extractCookies(request);

  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname);
  const isPublicRoute = !isProtectedRoute;

  if (isPublicRoute && accessToken && businessName) {
    return redirect(request, ROUTES.dashboard);
  }

  if (pathname === ROUTES.dashboard && accessToken && userCategory) {
    return redirect(request, ROUTES.products);
  }

  if (isProtectedRoute && !accessToken) {
    return redirect(request, ROUTES.login);
  }

  if (pathname === ROUTES.dashboard && userCategory) {
    return redirect(request, ROUTES.products);
  }

  if (pathname === ROUTES.products && businessName) {
    return redirect(request, ROUTES.dashboard);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|assets|icons|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
