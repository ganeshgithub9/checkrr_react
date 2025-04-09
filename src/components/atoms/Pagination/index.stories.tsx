import { Meta, StoryObj } from '@storybook/react';
import Pagination from '.';

const meta: Meta<typeof Pagination> = {
  component: Pagination
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const PrimaryPagination: Story = {
  args: {
    count: 3,
    color: 'primary'
  }
};

export const RoundedPagination: Story = {
  args: {
    count: 5,
    shape: 'rounded'
  }
};
