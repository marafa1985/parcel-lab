import { Logo } from "Components/atoms";
import { IconButton } from "Components/molecules/IconButton/IconButton";
import React from "react";
import { LockIcon } from "shared/icon";

type Props = {};

export const OrderDetailsHeader = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <IconButton icon={<LockIcon className="h-4 w-4" />}>sign out</IconButton>
    </div>
  );
};
