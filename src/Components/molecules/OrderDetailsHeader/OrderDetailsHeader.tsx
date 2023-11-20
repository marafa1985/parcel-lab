import { useContext } from "react";
import { OrderDetailsContext } from "../../../context/OrderDetailsContext";
import { LockIcon } from "../../../shared/icon";
import { Logo } from "../../atoms";
import { IconButton } from "../IconButton/IconButton";

type Props = {};

export const OrderDetailsHeader = (props: Props) => {
  const { signOut } = useContext(OrderDetailsContext);
  return (
    <header className="flex justify-between items-center m-4">
      <Logo />
      <IconButton onClick={signOut} icon={<LockIcon className="h-4 w-4" />}>
        sign out
      </IconButton>
    </header>
  );
};
