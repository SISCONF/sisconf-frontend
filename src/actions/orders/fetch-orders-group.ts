"use server";

import { client, ErrorResponse } from "../_utils/fetcher";
import { RequestMethods } from "../_utils/request-methods";
import { OrdersGroup } from "@/types/orders-group";

export async function fetchOrdersGroup(): Promise<OrdersGroup[]> {
  try {
    const response = await client("/orders-group", {
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
