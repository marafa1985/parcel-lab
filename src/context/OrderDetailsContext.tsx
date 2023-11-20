import { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderDetails, useOrder } from "../hooks/useSignIn";
import { ResponseError } from "../shared/types/error";
import { Order } from "../shared/types/types";
import { isErrorResponse } from "../shared/util";

export type OrderDetailsContextType = {
  signIn: (orderDetails: OrderDetails) => void;
  signOut: () => void;
  order: Order | null;
  isLoading: boolean;
  error: ResponseError | undefined;
};
export const OrderDetailsContext = createContext<OrderDetailsContextType>(
  {} as OrderDetailsContextType
);

export const OrderDetailsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const [order, setOrderDetails] = useState<Order | null>(null);
  const [error, setError] = useState<ResponseError>();

  const { getOrder, isLoading } = useOrder();

  const signIn = useCallback(
    async (orderDetails: OrderDetails) => {
      const orderData = await getOrder(orderDetails);

      if (!isErrorResponse(orderData)) {
        setOrderDetails(orderData);
        navigate("/orderview", { replace: true });
      } else {
        setError(orderData);
      }
    },
    [getOrder, navigate]
  );

  const signOut = useCallback(() => {
    setOrderDetails(null);
  }, [setOrderDetails]);

  return (
    <OrderDetailsContext.Provider
      value={{ signIn, signOut, order, isLoading, error }}
    >
      {children}
    </OrderDetailsContext.Provider>
  );
};
