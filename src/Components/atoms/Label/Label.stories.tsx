import type { StoryFn, Meta } from "@storybook/react";
import { Label, LabelProps } from "./Label";

export default {
  title: "atoms/Label",
  component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) => (
  <Label {...args}>Sample Label</Label>
);

export const Primary = Template.bind({});
Primary.args = {
  htmlFor: "sampleLabel",
};
