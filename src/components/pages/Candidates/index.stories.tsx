import { Meta, StoryObj } from '@storybook/react';
import Home from '.';

const meta: Meta<typeof Home> = {
  component: Home
};

export default meta;
type Story = StoryObj<typeof Home>;

export const CandidatesDefaultPage: Story = {
  args: {}
};
