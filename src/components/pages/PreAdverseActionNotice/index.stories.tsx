import { Meta, StoryObj } from '@storybook/react';
import PreAdverseActionNotice from '.';

const meta: Meta<typeof PreAdverseActionNotice> = {
  component: PreAdverseActionNotice
};

export default meta;
type Story = StoryObj<typeof PreAdverseActionNotice>;

export const PreAdverseActionNoticeDefaultPage: Story = {
  args: {}
};
