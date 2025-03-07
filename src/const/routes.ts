export const ROUTES = {
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  products: "/products",
  productsSummary: "/products-summary",
  profile: "/perfil",
};

export const PROTECTED_ROUTES = [
  ROUTES.dashboard,
  ROUTES.profile,
  ROUTES.products,
  ROUTES.productsSummary,
];
