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
      { value: 10, label: '10 per page', key: '10' },
      { value: 20, label: '20 per page', key: '20' },
      { value: 30, label: '30 per page', key: '30' }
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
      { value: 12, label: '12', key: '12' },
      { value: 13, label: '13', key: '13' },
      { value: 14, label: '14', key: '14' }
    ]
  }
};
