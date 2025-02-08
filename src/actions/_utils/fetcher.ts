import { cookies } from "next/headers";
import { API_HOST } from "@/const/envs";
import { RequestMethods } from "./request-methods";

export interface ErrorResponse {
  status: number;
  message: string;
}

interface ClientOptions extends RequestInit {
  auth?: boolean;
}

interface ClientParams {
  options?: ClientOptions;
  body?: any;
  method?: RequestMethods;
  queryParams?: Record<string, any>;
}

const client = async <T = any>(
  endpoint: string,
  {
    options = {},
    body,
    method = RequestMethods.GET,
    queryParams = {},
  }: ClientParams
): Promise<T | null> => {
  const headers: HeadersInit = { "Content-Type": "application/json" };

  if (options.auth !== false) {
    const token = cookies().get("access")?.value;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const normalizedEndpoint = endpoint.startsWith("/")
    ? endpoint.slice(1)
    : endpoint;

  const url = new URL(
    normalizedEndpoint.startsWith("http")
      ? normalizedEndpoint
      : `${API_HOST}/${normalizedEndpoint}`
  );

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value) {
      url.searchParams.append(key, value);
    }
  });

  const { auth, ...restOptions } = options;

  const config: RequestInit = {
    method,
    headers,
    ...restOptions,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url.toString(), config);

    if (!response.ok) {
      const error = await response.json().catch(() => response.text());
      const errorMessage =
        error?.errors?.[0]?.detail || error?.message || "Erro desconhecido";
      return Promise.reject({
        status: response.status,
        message: errorMessage,
      });
    }

    const contentType = response.headers.get("Content-Type");
    const contentLength = response.headers.get("Content-Length");

    if (!contentType || contentLength === "0") {
      return null;
    }

    const data = await response.json().catch(() => null);
    return data ?? null;
  } catch (error) {
    return Promise.reject({
      status: 500,
      message: `
        Error while trying to fetch data from ${url.toString()}: ${error}
      `,
    });
  }
};

export { client };
