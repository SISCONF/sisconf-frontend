"use server";

import { client, ErrorResponse } from "../_utils/fetcher";
import { RequestMethods } from "../_utils/request-methods";
import { Order } from "@/types/order";

export async function createOrder(data: Order): Promise<Order | null> {
  try {
    const response = await client("/orders", {
      method: RequestMethods.POST,
      body: data,
    });

    return response;
  } catch (error) {
    throw new Error((error as ErrorResponse).message);
  }
}

