export const PUBLIC_ROUTES = [
  { path: "/", whenAuthenticated: "redirect" },
  { path: "/login", whenAuthenticated: "redirect" },
  { path: "/register", whenAuthenticated: "redirect" },
] as const;

export const PROTECTED_ROUTES = {
  DASHBOARD: "/dashboard",
};

export const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/login";
