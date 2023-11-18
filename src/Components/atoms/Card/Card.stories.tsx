import type { StoryFn, Meta } from "@storybook/react";
import { Card, CardProps } from "./Card";

export default {
  title: "atoms/Card",
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Card",
};
