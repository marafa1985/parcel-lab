import { LabelHTMLAttributes } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ className, children, ...props }: LabelProps) => (
  <label
    className={`${className} block text-sm font-medium leading-6`}
    {...props}
  >
    {children}
  </label>
);
