import { AnchorHTMLAttributes } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, ...props }: LinkProps) => {
  return <a {...props}>{children}</a>;
};
