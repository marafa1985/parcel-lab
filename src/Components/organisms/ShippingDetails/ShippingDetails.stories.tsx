import type { Meta, StoryObj } from "@storybook/react";

import { ShippingDetails } from "./ShippingDetails";

const meta: Meta<typeof ShippingDetails> = {
  title: "organisms/ShippingDetails",
  component: ShippingDetails,
};

export default meta;
type Story = StoryObj<typeof ShippingDetails>;

export const Primary: Story = {
  render: () => <ShippingDetails />,
};
