import { LabelHTMLAttributes } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ children, ...props }: LabelProps) => (
  <label
    {...props}
    className="block text-sm font-medium leading-6 text-gray-900"
  >
    {children}
  </label>
);
