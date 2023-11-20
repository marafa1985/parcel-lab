import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";
import { LockIcon } from "../../../shared/icon";

const meta: Meta<typeof IconButton> = {
  title: "molecules/IconButton",
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    children: "sign out",
    icon: <LockIcon className="h-4 w-4" />,
  },
  render: (args) => <IconButton {...args} />,
};
