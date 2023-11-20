import { ErrorMessageProps } from "components/molecules";
import { ResponseError } from "shared/types/error";
import { Order } from "shared/types/types";

export const isErrorResponse = (
  response: ResponseError | Order
): response is ErrorMessageProps => {
  if ("error" in response) {
    return true;
  }

  return false;
};
