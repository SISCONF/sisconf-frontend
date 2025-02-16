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
      cookies().set("refresh_token", response.refresh, {});
      cookies().set("access_token", response.access);
      cookies().set("user", JSON.stringify(response.user));
    }
    console.log(response);
    return response;
  } catch (error: any) {
    throw new Error((error as ErrorResponse).message);
  }
}
