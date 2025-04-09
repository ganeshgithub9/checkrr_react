import { Meta, StoryObj } from '@storybook/react';
import Chip from '.';

const meta: Meta<typeof Chip> = {
  component: Chip
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const FilledChip: Story = {
  args: {
    label: 'Filled Chip',
    variant: 'filled'
  }
};

export const OutlinedChip: Story = {
  args: {
    label: 'Outlined Chip',
    variant: 'outlined'
  }
};
