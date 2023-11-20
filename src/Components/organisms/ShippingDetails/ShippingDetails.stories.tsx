import type { Meta, StoryObj } from "@storybook/react";

import { ShippingDetails } from "./ShippingDetails";

const meta: Meta<typeof ShippingDetails> = {
  title: "organisms/ShippingDetails",
  component: ShippingDetails,
};

export default meta;
type Story = StoryObj<typeof ShippingDetails>;

export const Primary: Story = {
  args: {
    checkpoints: [
      {
        status_details:
          "Your package was registered in our system by the sender.",
        event_timestamp: "2023-01-02T14:10:30Z",
        status: "Registered",
        country_iso3: "USA",
        city: "Knoxville",
      },
    ],
  },
  render: (args) => <ShippingDetails {...args} />,
};
