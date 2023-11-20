import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "molecules/ProgressBar",
  component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
  args: {
    progress: 3,
    base: 4,
  },
  render: (args) => <ProgressBar {...args} />,
};
