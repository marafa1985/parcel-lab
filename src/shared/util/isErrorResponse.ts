import { ErrorMessageProps } from "../../Components/molecules";
import { ResponseError } from "../types/error";
import { Order } from "../types/types";

export const isErrorResponse = (
  response: ResponseError | Order
): response is ErrorMessageProps => {
  if ("error" in response) {
    return true;
  }

  return false;
};
