import type { Meta, StoryObj } from "@storybook/react";

import { SignInForm } from "./SignInForm";
import { OrderDetailsProvider } from "context/OrderDetailsContext";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof SignInForm> = {
  title: "organisms/SignInForm",
  component: SignInForm,
};

export default meta;
type Story = StoryObj<typeof SignInForm>;

export const Primary: Story = {
  render: () => (
    <BrowserRouter>
      <OrderDetailsProvider>
        <SignInForm />,
      </OrderDetailsProvider>
    </BrowserRouter>
  ),
};
