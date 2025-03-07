export const ROUTES = {
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  products: "/products",
  productsSummary: "/products-summary",
  profile: "/profile",
};

export const PROTECTED_ROUTES = [
  ROUTES.dashboard,
  ROUTES.profile,
  ROUTES.products,
  ROUTES.productsSummary,
];
