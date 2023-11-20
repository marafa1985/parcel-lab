import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { OrderDetailsContext } from "../../../context/OrderDetailsContext";

type RequireAuthProps = { children: JSX.Element };
export const RequireAuth = ({ children }: RequireAuthProps) => {
  let { order } = useContext(OrderDetailsContext);
  let location = useLocation();

  if (!order) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};
