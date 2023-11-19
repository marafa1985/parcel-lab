import type { Meta, StoryObj } from "@storybook/react";

import { ErrorMessage } from "./Error";

const meta: Meta<typeof ErrorMessage> = {
  title: "molecules/Error",
  component: ErrorMessage,
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Primary: Story = {
  args: {
    error: {
      code: "404",
      message: "Order not found",
    },
  },
  render: (args) => <ErrorMessage {...args} />,
};
