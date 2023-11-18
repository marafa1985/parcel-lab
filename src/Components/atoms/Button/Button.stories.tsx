import type { StoryFn, Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "atoms/Button",
  component: Button,
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "button",
  children: "Primary",
  onClick: () => alert("clicked"),
};
