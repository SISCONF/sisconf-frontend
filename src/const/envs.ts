export const API_HOST =
  process.env.API_HOST?.replace(/"/g, "") || "http://localhost:8080/api";
export const IMAGES_HOST = process.env.NEXT_PUBLIC_IMAGES_HOST?.replace(
  /"/g,
  ""
);
