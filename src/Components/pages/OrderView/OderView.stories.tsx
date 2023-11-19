import type { Meta, StoryObj } from "@storybook/react";

import { OderView } from "./OderView";

const meta: Meta<typeof OderView> = {
  title: "Pages/OderView",
  component: OderView,
};

export default meta;
type Story = StoryObj<typeof OderView>;

export const Primary: Story = {
  render: () => (
    <div className="flex justify-center items-center h-screen w-screen m-auto from-blue-100 bg-gradient-to-b">
      <OderView />
    </div>
  ),
};
