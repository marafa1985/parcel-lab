import type { Meta, StoryObj } from "@storybook/react";

import { OrderDetailsHeader } from "./OrderDetailsHeader";

const meta: Meta<typeof OrderDetailsHeader> = {
  title: "molecules/OrderDetailsHeader",
  component: OrderDetailsHeader,
};

export default meta;
type Story = StoryObj<typeof OrderDetailsHeader>;

export const Primary: Story = {
  args: {
    type: "text",
    label: "Input",
  },
};
