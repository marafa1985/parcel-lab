import React, { AnchorHTMLAttributes } from "react";

export type IconButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: React.ReactNode;
};

export const IconButton = ({ icon, children, ...props }: IconButtonProps) => {
  return (
    <a {...props}>
      <span className="flex items-center justify-between ring-1 ring-indigo-800 rounded px-3 py-1   text-indigo-800">
        {icon}
        {children}
      </span>
    </a>
  );
};
