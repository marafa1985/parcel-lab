import useSWRMutation from "swr/mutation";
import { getOrderDetails } from "../shared/client/signIn";
import { ResponseError } from "../shared/types/error";
import { Order } from "../shared/types/types";

export type OrderDetails = {
  orderNumber: string;
  zipCode: string;
};

export type SignIn = {
  error: ResponseError | undefined;
  isLoading: boolean;
  getOrder: (orderDetails: OrderDetails) => Promise<Order | ResponseError>;
};

const fetchOrder = async (_: string, { arg }: { arg: OrderDetails }) => {
  const { orderNumber, zipCode } = arg;
  return await getOrderDetails(orderNumber, zipCode);
};

export const useOrder = (): SignIn => {
  const {
    trigger,
    isMutating: isLoading,
    error,
  } = useSWRMutation("/orders", fetchOrder, {
    populateCache: true,
    revalidate: false,
  });

  const getOrder = ({ orderNumber, zipCode }: OrderDetails) => {
    return trigger({ orderNumber, zipCode });
  };

  return {
    error,
    isLoading,
    getOrder,
  };
};
