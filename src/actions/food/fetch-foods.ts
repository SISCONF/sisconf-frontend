"use server";

import { Food } from "@/types/food";
import { client, ErrorResponse } from "../_utils/fetcher";
import { RequestMethods } from "../_utils/request-methods";

export async function fetchFoods(): Promise<Food[]> {
  try {
    const response = await client("/foods", {
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
