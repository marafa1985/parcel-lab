import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
  },
  render: (args) => <Button {...args} />,
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => <Button {...args} />,
};
