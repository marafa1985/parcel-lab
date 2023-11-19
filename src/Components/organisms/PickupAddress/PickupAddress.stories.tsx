import type { Meta, StoryObj } from "@storybook/react";

import { PickupAddress } from "./PickupAddress";

const meta: Meta<typeof PickupAddress> = {
  title: "organisms/PickupAddress",
  component: PickupAddress,
};

export default meta;
type Story = StoryObj<typeof PickupAddress>;

export const Primary: Story = {
  args: {
    link: "https://www.google.com/maps/place/Deutsche+Post+Filiale+426/@48.1601323,11.5732987,17z/data=!4m13!1m7!3m6!1s0x479e75c476d43137:0x170cb26ab86665fd!2sKurf%C3%BCrstenpl.+8,+80796+M%C3%BCnchen!3b1!8m2!3d48.1601287!4d11.5754874!3m4!1s0x479e7500ee0b5685:0xedf77ddb0bfe2602!8m2!3d48.1601164!4d11.5753654",
    url: "https://raw.githubusercontent.com/parcelLab/challenge-frontend-engineer/main/map.png",
  },
  render: (args) => <PickupAddress {...args} />,
};
