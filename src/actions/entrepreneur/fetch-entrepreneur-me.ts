"use server";

import { Entrepreneur } from "@/types/entrepreneur";
import { client, ErrorResponse } from "../_utils/fetcher";
import { RequestMethods } from "../_utils/request-methods";

export async function fetchEntrepreneurMe(): Promise<Entrepreneur> {
  try {
    const response = await client(`/entrepreneurs/me`, {
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
