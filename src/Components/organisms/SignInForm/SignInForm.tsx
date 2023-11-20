import { useContext, useRef } from "react";
import { OrderDetailsContext } from "context/OrderDetailsContext";
import {
  InputWithLabel,
  SignInHeader,
  ErrorMessage,
} from "components/molecules";
import { Button, Card } from "components/atoms";

export const SignInForm = () => {
  const { signIn, error, isLoading } = useContext(OrderDetailsContext);

  const orderNumberRef = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);

  const handleSinInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (orderNumberRef.current?.value && zipCodeRef.current?.value) {
      signIn({
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
            data-testid="orderNumber"
            name="orderNumber"
            type="text"
            label="Order Number"
            ref={orderNumberRef}
            required
          ></InputWithLabel>

          <InputWithLabel
            data-testid="zipCode"
            name="zipCode"
            type="text"
            label="Zip Code"
            ref={zipCodeRef}
            required
          ></InputWithLabel>
        </fieldset>

        <div className=" border-t border-gray-400 pt-5 !my-5">
          <Button isLoading={isLoading} type="submit" role="submit">
            Track
          </Button>
        </div>

        {error && <ErrorMessage {...error} />}
      </form>
    </Card>
  );
};
