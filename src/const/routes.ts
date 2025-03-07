export const ROUTES = {
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  products: "/products",
  profile: "/profile",
};

export const PROTECTED_ROUTES = [
  ROUTES.dashboard,
  ROUTES.profile,
  ROUTES.products,
];
