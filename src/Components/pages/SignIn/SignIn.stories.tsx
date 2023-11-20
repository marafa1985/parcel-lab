import type { Meta, StoryObj } from "@storybook/react";

import { SignIn } from "./SignIn";
import { OrderDetailsContextProvider } from "context/OrderDetailsContext";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof SignIn> = {
  title: "Pages/SignIn",
  component: SignIn,
};

export default meta;
type Story = StoryObj<typeof SignIn>;

export const Primary: Story = {
  render: () => (
    <BrowserRouter>
      <OrderDetailsContextProvider>
        <div className="flex justify-center items-center  h-screen w-screen m-auto from-blue-100 bg-gradient-to-b">
          <section>
            <SignIn />
          </section>
        </div>
      </OrderDetailsContextProvider>
    </BrowserRouter>
  ),
};
