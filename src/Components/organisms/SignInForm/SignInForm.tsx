import { Button } from "../../atoms/Button/Button";
import { InputWithLabel } from "../../molecules/InputWithLabel/InputWithLabel";
import { SignInHeader } from "../../molecules/SignInHeader/SignInHeader";

export const SignInForm = () => {
  return (
    <form className="pb-12 px-8 space-y-6" action="#" method="POST">
      <SignInHeader />
      <fieldset>
        <InputWithLabel
          name="orderNumber"
          type="text"
          label="Order Number"
          required
        ></InputWithLabel>
        <InputWithLabel
          name="zipCode"
          type="text"
          label="Zip Code"
          required
        ></InputWithLabel>
      </fieldset>
      <Button type="submit">Track</Button>
    </form>
  );
};
