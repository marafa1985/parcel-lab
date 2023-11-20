import type { Meta, StoryObj } from "@storybook/react";

import { Pickup } from "./Pickup";
import { formatDateForLocale } from "../../../shared/util";

const meta: Meta<typeof Pickup> = {
  title: "molecules/Pickup",
  component: Pickup,
};

export default meta;
type Story = StoryObj<typeof Pickup>;

export const Primary: Story = {
  args: {
    delivery_date: formatDateForLocale(new Date("2022-01-01")),
    delivery_time_frame_from: "10:00",
    delivery_time_frame_to: "17:00",
    pickup_address: "Pickup address",
    pickup_address_map_url:
      "https://raw.githubusercontent.com/parcelLab/challenge-frontend-engineer/main/map.png",
    pickup_address_link: "https://www.google.com/maps",
  },
  render: (args) => <Pickup {...args} />,
};
