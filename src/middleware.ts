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
  };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { accessToken, userCategory } = extractCookies(request);

  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname);
  const isPublicRoute = !isProtectedRoute;

  if (isPublicRoute && accessToken && userCategory === "ENTREPRENEUR") {
    return redirect(request, ROUTES.dashboard);
  }

  if (isProtectedRoute && !accessToken) {
    return redirect(request, ROUTES.login);
  }

  if (pathname === ROUTES.dashboard && userCategory !== "ENTREPRENEUR") {
    return redirect(request, ROUTES.login);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
