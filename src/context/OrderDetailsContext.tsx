import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn, useSignIn } from "hooks/useSignIn";
import { Order } from "shared/types/types";
import { isErrorResponse } from "shared/util";

export type OrderDetailsContextType = {
  signIn: SignIn;
  signOut: () => void;
  orderDetails: Order | null;
};
export const OrderDetailsContext = createContext<OrderDetailsContextType>(
  {} as OrderDetailsContextType
);

export const OrderDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState<Order | null>(null);

  const signIn = useSignIn();
  const signOut = () => {
    setOrderDetails(null);
    navigate("/");
  };

  useEffect(() => {
    if (signIn.order && !isErrorResponse(signIn.order)) {
      setOrderDetails(signIn.order);
      navigate("/orderview", { replace: true });
    } else {
      setOrderDetails(null);
      navigate("/");
    }
  }, [navigate, signIn.order]);

  return (
    <OrderDetailsContext.Provider
      value={{
        signIn,
        signOut,
        orderDetails,
      }}
    >
      {children}
    </OrderDetailsContext.Provider>
  );
};
