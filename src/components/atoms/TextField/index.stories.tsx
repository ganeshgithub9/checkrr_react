import { Meta, StoryObj } from '@storybook/react';
import TextField from '.';

const meta: Meta<typeof TextField> = {
  component: TextField
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const FilledTextField: Story = {
  args: {
    autoFocus: true,
    placeholder: 'Search any candidate',
    variant: 'filled'
  }
};

export const StandardTextField: Story = {
  args: {
    autoFocus: false,
    placeholder: 'Search any action',
    variant: 'standard',
    value: 'run'
  }
};
