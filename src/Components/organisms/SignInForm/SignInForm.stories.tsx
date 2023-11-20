import type { Meta, StoryObj } from "@storybook/react";

import { SignInForm } from "./SignInForm";
import { BrowserRouter } from "react-router-dom";
import { OrderDetailsContextProvider } from "../../../context/OrderDetailsContext";

const meta: Meta<typeof SignInForm> = {
  title: "organisms/SignInForm",
  component: SignInForm,
};

export default meta;
type Story = StoryObj<typeof SignInForm>;

export const Primary: Story = {
  render: () => (
    <BrowserRouter>
      <OrderDetailsContextProvider>
        <SignInForm />,
      </OrderDetailsContextProvider>
    </BrowserRouter>
  ),
};
