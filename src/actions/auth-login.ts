"use server";

import { cookies } from "next/headers";
import { client, ErrorResponse } from "./_utils/fetcher";
import { RequestMethods } from "./_utils/request-methods";

export async function authLogin(email: string, password: string) {
  try {
    const response = await client("/people/login", {
      method: RequestMethods.POST,
      body: { email, password },
    });
    if (response) {
      cookies().set("refresh_token", response.refreshToken, {});
      cookies().set("access_token", response.authenticationToken);
    }

    return response;
  } catch (error: any) {
    throw new Error((error as ErrorResponse).message);
  }
}
