import { useContext } from "react";
import { Logo } from "Components/atoms";
import { IconButton } from "Components/molecules/IconButton/IconButton";
import { LockIcon } from "shared/icon";
import { OrderDetailsContext } from "context/OrderDetailsContext";

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
