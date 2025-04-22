import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '.';
import { filtersCheckboxLabels } from '../../constants/objects';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const SimpleDropdown: Story = {
  args: {
    heading: 'Filters',
    subHeading: 'Status',
    checkboxLabels: [...filtersCheckboxLabels]
  }
};
