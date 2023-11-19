import { ButtonHTMLAttributes } from "react";
import { SpinnerIcon } from "shared/icon";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

export const Button = ({ isLoading, children, ...props }: ButtonProps) => (
  <button {...props} className="base-button" disabled={isLoading}>
    {isLoading ? (
      <>
        <SpinnerIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />{" "}
        Loading...
      </>
    ) : (
      children
    )}
  </button>
);
