import type { Meta, StoryObj } from "@storybook/react";

import { ArticlesDetails } from "./ArticlesDetails";

const meta: Meta<typeof ArticlesDetails> = {
  title: "organisms/ArticlesDetails",
  component: ArticlesDetails,
};

export default meta;
type Story = StoryObj<typeof ArticlesDetails>;

export const Primary: Story = {
  render: () => <ArticlesDetails />,
};
