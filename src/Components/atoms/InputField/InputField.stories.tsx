import type { Meta, StoryObj } from '@storybook/react';

import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'atoms/InputField',
  component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  args: {
    type: 'text',
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled Input Field',
    disabled: true,
  },
};
