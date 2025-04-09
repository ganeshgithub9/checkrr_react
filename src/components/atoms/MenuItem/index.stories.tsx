import { Meta, StoryObj } from '@storybook/react';
import MenuItem from '.';

const meta: Meta<typeof MenuItem> = {
  component: MenuItem
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const TenMenuItem: Story = {
  args: {
    value: 10,
    label: '10 per page'
  }
};

export const TwentyMenuItem: Story = {
  args: {
    value: 20,
    label: '20 per page'
  }
};

export const ThirtyMenuItem: Story = {
  args: {
    value: 30,
    label: '30 per page'
  }
};
