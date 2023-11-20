import type { Meta, StoryObj } from "@storybook/react";

import { DeliveryInformation } from "./DeliveryInformation";

const meta: Meta<typeof DeliveryInformation> = {
  title: "molecules/DeliveryInformation",
  component: DeliveryInformation,
};

export default meta;
type Story = StoryObj<typeof DeliveryInformation>;

export const Primary: Story = {
  args: {
    delivery_date: "2022-01-01",
    delivery_time_frame_from: "10:00",
    delivery_time_frame_to: "17:00",
  },
  render: (args) => <DeliveryInformation {...args} />,
};
