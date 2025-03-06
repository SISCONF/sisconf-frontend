import { Entrepreneur } from "@/types/entrepreneur";
import { client, ErrorResponse } from "../_utils/fetcher";
import { RequestMethods } from "../_utils/request-methods";

export async function createEntrepreneur(
  data: Entrepreneur
): Promise<Entrepreneur | null> {
  try {
    const response = await client("/entrepreneurs", {
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
