import { Meta, StoryObj } from '@storybook/react';
import CheckBox from '.';

const meta: Meta<typeof CheckBox> = {
  component: CheckBox
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const DefaultCheckedCheckBox: Story = {
  args: {
    disabled: false,
    defaultChecked: true,
    checked: false,
    label: 'Checkedbox'
  }
};

export const CheckedAndDisabledCheckBox: Story = {
  args: {
    disabled: true,
    defaultChecked: false,
    checked: true,
    label: 'Disabled Checkbox'
  }
};

export const DisabledCheckBox: Story = {
  args: {
    disabled: true,
    defaultChecked: false,
    checked: false
  }
};
