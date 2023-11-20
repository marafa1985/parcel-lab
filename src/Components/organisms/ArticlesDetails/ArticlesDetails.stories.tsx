import type { Meta, StoryObj } from "@storybook/react";

import { ArticlesDetails } from "./ArticlesDetails";

const meta: Meta<typeof ArticlesDetails> = {
  title: "organisms/ArticlesDetails",
  component: ArticlesDetails,
};

export default meta;
type Story = StoryObj<typeof ArticlesDetails>;

export const Primary: Story = {
  args: {
    articles: [
      {
        articleNo: "AB20100",
        articleName: "iPhone Pro Case Baby Blue",
        articleImageUrl: null,
        quantity: 1,
        price: 59.0,
      },
      {
        articleNo: "AB20129",
        articleName: "Magsafe Charger for Apple iPhone",
        articleImageUrl:
          "https://images.unsplash.com/photo-1615526675159-e248c3021d3f",
        quantity: 1,
        price: 49.0,
      },
    ],
  },

  render: (args) => <ArticlesDetails {...args} />,
};
