import { Meta, StoryObj } from '@storybook/react';
import CandidateInfo from '.';

const meta: Meta<typeof CandidateInfo> = {
  component: CandidateInfo
};

export default meta;
type Story = StoryObj<typeof CandidateInfo>;

export const CandidateInfoDefaultPage: Story = {
  args: {}
};
