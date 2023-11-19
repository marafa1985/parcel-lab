import { getOrderDetails } from "shared/client/signIn";
import { ResponseError } from "shared/types/error";
import { Order } from "shared/types/types";
import useSWRMutation, { TriggerWithArgs } from "swr/mutation";

export type OrderDetails = {
  orderNumber: string;
  zipCode: string;
};

export type SignIn = {
  order: Order | ResponseError | undefined;
  error: ResponseError | undefined;
  isLoading: boolean;
  setOrderQuery: TriggerWithArgs<
    Order | ResponseError,
    any,
    "/orders",
    OrderDetails
  >;
};

const getOrder = async (_: string, { arg }: { arg: OrderDetails }) => {
  const { orderNumber, zipCode } = arg;
  return await getOrderDetails(orderNumber, zipCode);
};

export const useSignIn = (): SignIn => {
  const {
    trigger: setOrderQuery,
    data: order,
    isMutating: isLoading,
    error,
  } = useSWRMutation("/orders", getOrder, {
    populateCache: true,
    revalidate: false,
  });

  return {
    order,
    error,
    isLoading,
    setOrderQuery,
  };
};
