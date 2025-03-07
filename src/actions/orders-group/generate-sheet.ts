"use server";

import { client, ErrorResponse } from "../_utils/fetcher";
import { RequestMethods } from "../_utils/request-methods";

export async function generateSheet(
  id: number
): Promise<string | null> {
  try {
    const response = await client(`/orders-group/${id}/generate-sheet`, {
      method: RequestMethods.POST,
    });

    return response;
  } catch (error) {
    throw new Error((error as ErrorResponse).message);
  }
}
