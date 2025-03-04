import { NextRequest, NextResponse } from "next/server";
import {
  PUBLIC_ROUTES,
  REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE,
} from "./const/routes";

// This function can be marked async if using await inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = PUBLIC_ROUTES.find((route) => route.path === path);
  const authToken = request.cookies.get("access_token");

  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }

  if (
    authToken &&
    publicRoute &&
    publicRoute.whenAuthenticated === "redirect"
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && !publicRoute) {
    return NextResponse.next();
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
