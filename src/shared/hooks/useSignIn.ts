import { getOrderDetails } from "shared/client/signIn";
import useSWRMutation from "swr/mutation";

type OrderDetails = {
  orderNumber: string;
  zipCode: string;
};

const getOrder = async (_: string, { arg }: { arg: OrderDetails }) => {
  const { orderNumber, zipCode } = arg;
  return await getOrderDetails(orderNumber, zipCode);
};

export const useSignIn = () => {
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
