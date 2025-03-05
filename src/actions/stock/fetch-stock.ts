"use server";

import { client, ErrorResponse } from "../_utils/fetcher";
import { RequestMethods } from "../_utils/request-methods";
import { Stock } from "@/types/stock";

export async function fetchStock(entrepreneurId: number): Promise<Stock> {
  try {
    const response = await client(`/stocks/entrepreneurs/${entrepreneurId}`, {
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
