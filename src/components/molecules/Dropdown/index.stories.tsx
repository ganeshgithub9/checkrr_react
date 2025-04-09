import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '.';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const SimpleDropdown: Story = {
  args: {
    inputLabelProps: {
      label: 'page size'
    },
    selectProps: {
      sx: {
        width: 120,
        height: 50
      },
      value: 10,
      label: '10 per page'
    },
    menuItems: [
      { value: 10, label: '10 per page' },
      { value: 20, label: '20 per page' },
      { value: 30, label: '30 per page' }
    ]
  }
};

export const NumberDropdown: Story = {
  args: {
    inputLabelProps: {
      label: 'number'
    },
    selectProps: {
      sx: {
        width: 120,
        height: 50
      },
      value: 10,
      label: '10 per page'
    },
    menuItems: [
      { value: 10, label: '12' },
      { value: 20, label: '13' },
      { value: 30, label: '14' }
    ]
  }
};
