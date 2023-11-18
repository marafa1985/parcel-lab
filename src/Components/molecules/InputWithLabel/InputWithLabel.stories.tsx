import type { Meta, StoryObj } from "@storybook/react";

import { InputWithLabel } from "./InputWithLabel";

const meta: Meta<typeof InputWithLabel> = {
  title: "molecules/InputWithLabel",
  component: InputWithLabel,
};

export default meta;
type Story = StoryObj<typeof InputWithLabel>;

export const Primary: Story = {
  args: {
    type: "text",
    label: "Input",
  },
};
