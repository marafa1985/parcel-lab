import type { Meta, StoryObj } from "@storybook/react";

import { CheckPointItem } from "./CheckPointItem";

const meta: Meta<typeof CheckPointItem> = {
  title: "molecules/CheckPointItem",
  component: CheckPointItem,
};

export default meta;
type Story = StoryObj<typeof CheckPointItem>;

export const Primary: Story = {
  args: {
    status_details:
      "The goods will be ready for collection on the next working day.",
    meta: {
      pickup_address: "Kurfürstenplatz 8, 80796 München",
      pickup_address_link:
        "https://www.google.com/maps/place/Deutsche+Post+Filiale+426/@48.1601323,11.5732987,17z/data=!4m13!1m7!3m6!1s0x479e75c476d43137:0x170cb26ab86665fd!2sKurf%C3%BCrstenpl.+8,+80796+M%C3%BCnchen!3b1!8m2!3d48.1601287!4d11.5754874!3m4!1s0x479e7500ee0b5685:0xedf77ddb0bfe2602!8m2!3d48.1601164!4d11.5753654",
      pickup_address_map_url:
        "https://raw.githubusercontent.com/parcelLab/challenge-frontend-engineer/main/map.png",
    },
    event_timestamp: "2023-01-07T20:02:30Z",
    status: "Ready for collection",
    country_iso3: "DEU",
    city: "Munich",
  },
  render: (args) => <CheckPointItem {...args} />,
};
