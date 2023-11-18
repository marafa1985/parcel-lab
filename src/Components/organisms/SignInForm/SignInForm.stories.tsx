import type { Meta, StoryObj } from "@storybook/react";

import { SignInForm } from "./SignInForm";

const meta: Meta<typeof SignInForm> = {
  title: "organisms/SignInForm",
  component: SignInForm,
};

export default meta;
type Story = StoryObj<typeof SignInForm>;

export const Primary: Story = {
  render: () => <SignInForm />,
};
