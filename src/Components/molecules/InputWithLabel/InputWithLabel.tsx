import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { InputField } from "../../atoms";
import { Label } from "../../atoms/Label/Label";

export type InputWithLabelProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
type InputFieldRef = ForwardedRef<HTMLInputElement>;

export const InputWithLabel = forwardRef(
  ({ label, ...props }: InputWithLabelProps, ref: InputFieldRef) => {
    return (
      <p className="py-2">
        <Label>
          {label}
          <InputField ref={ref} {...props} type={props.type} />
        </Label>
      </p>
    );
  }
);
