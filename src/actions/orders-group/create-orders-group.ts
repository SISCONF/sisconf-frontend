"use server";

import { client, ErrorResponse } from "../_utils/fetcher";
import { RequestMethods } from "../_utils/request-methods";
import { OrdersGroup, OrdersGroupCreation } from "@/types/orders-group";

export async function createOrdersGroup(
  data: OrdersGroupCreation
): Promise<OrdersGroup | null> {
  try {
    const response = await client("/orders-group", {
      method: RequestMethods.POST,
      body: data,
    });

    return response;
  } catch (error) {
    throw new Error((error as ErrorResponse).message);
  }
}
