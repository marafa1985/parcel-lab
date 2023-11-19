import { useContext, useRef } from "react";
import { Button, Card } from "Components/atoms";
import {
  InputWithLabel,
  SignInHeader,
  ErrorMessage,
} from "Components/molecules";
import { isErrorResponse } from "shared/util";
import { OrderDetailsContext } from "context/OrderDetailsContext";

export const SignInForm = () => {
  const orderNumberRef = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const {
    signIn: { order, setOrderQuery, isLoading },
  } = useContext(OrderDetailsContext);

  const handleSinInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (orderNumberRef.current?.value && zipCodeRef.current?.value) {
      setOrderQuery({
        orderNumber: orderNumberRef.current.value,
        zipCode: zipCodeRef.current.value,
      });
    }
  };

  return (
    <Card>
      <form className="pb-12 px-8 space-y-6" onSubmit={handleSinInSubmit}>
        <SignInHeader />

        <fieldset>
          <InputWithLabel
            name="orderNumber"
            type="text"
            label="Order Number"
            ref={orderNumberRef}
            required
          ></InputWithLabel>

          <InputWithLabel
            name="zipCode"
            type="text"
            label="Zip Code"
            ref={zipCodeRef}
            required
          ></InputWithLabel>
        </fieldset>

        <div className=" border-t border-gray-400 pt-5 !my-5">
          <Button isLoading={isLoading} type="submit">
            Track
          </Button>
        </div>
        {order && isErrorResponse(order) && <ErrorMessage {...order} />}
      </form>
    </Card>
  );
};
