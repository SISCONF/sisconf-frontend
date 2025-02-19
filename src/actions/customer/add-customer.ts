"use server";

import { Customer } from "@/types/customer";
import { client, ErrorResponse } from "../_utils/fetcher";
import { RequestMethods } from "../_utils/request-methods";

export async function createCustomer(data: Customer): Promise<Customer | null> {
  try {
    const response = await client("/customers", {
      method: RequestMethods.POST,
      options: {
        body: JSON.stringify(data),
      },
    });

    return response;
  } catch (error) {
    throw new Error((error as ErrorResponse).message);
  }
}
