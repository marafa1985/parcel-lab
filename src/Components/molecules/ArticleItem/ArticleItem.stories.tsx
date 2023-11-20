import type { Meta, StoryObj } from "@storybook/react";

import { ArticleItem } from "./ArticleItem";

const meta: Meta<typeof ArticleItem> = {
  title: "molecules/ArticleItem",
  component: ArticleItem,
};

export default meta;
type Story = StoryObj<typeof ArticleItem>;

export const Primary: Story = {
  args: {
    articleNo: "AB30M216",
    articleName: "Macbook Pro M2 Max 16inch",
    articleImageUrl:
      "https://images.unsplash.com/photo-1639249227523-78502e9bb8b7",
    price: 4199.0,
  },
  render: (args) => <ArticleItem {...args} />,
};
