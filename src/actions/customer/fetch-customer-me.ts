"use server";

import { client, ErrorResponse } from "../_utils/fetcher";
import { RequestMethods } from "../_utils/request-methods";
import { User } from "@/types/user";

export async function fetchCustomerMe(): Promise<User> {
  try {
    const response = await client(`/customers/me`, {
      method: RequestMethods.GET,
      options: {
        auth: true,
      },
    });

    return response;
  } catch (error) {
    throw new Error((error as ErrorResponse).message);
  }
}
