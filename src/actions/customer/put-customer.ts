"use server";

import { client, ErrorResponse } from "../_utils/fetcher";
import { RequestMethods } from "../_utils/request-methods";
import { Customer } from "@/types/customer";
import { User } from "@/types/user";

export async function putCustomer(
  customerId: number,
  data: Customer
): Promise<User> {
  try {
    const response = await client(`/customers/${customerId}`, {
      method: RequestMethods.PUT,
      options: {
        auth: true,
        body: JSON.stringify(data),
      },
    });

    return response;
  } catch (error) {
    throw new Error((error as ErrorResponse).message);
  }
}
