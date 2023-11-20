import { ErrorIcon } from "../../../shared/icon";
import { ResponseError } from "../../../shared/types/error";

export type ErrorMessageProps = {
  error: {
    code: string;
    message: string;
  };
};

export const ErrorMessage = (props: ResponseError) => {
  return (
    <div role="alert" className="flex items-center gap-2">
      <ErrorIcon className="w-6" />
      <p className="text-sm text-red-600">{props.error.message}</p>
    </div>
  );
};
