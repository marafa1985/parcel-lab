import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

export const InputField = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <input
      {...props}
      className="w-full rounded-md h-12 border-0 p-3 text-lg  text-gray-900 ring-1  ring-gray-300"
      ref={ref}
    />
  )
);
