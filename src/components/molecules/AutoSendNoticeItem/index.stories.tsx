import { Meta, StoryObj } from '@storybook/react';
import AutoSendNoticeItem from '.';

const meta: Meta<typeof AutoSendNoticeItem> = {
  component: AutoSendNoticeItem
};

export default meta;
type Story = StoryObj<typeof AutoSendNoticeItem>;

export const DefaultAutoSendNoticeItem: Story = {
  args: {
    noticeButtonProps: {
      variant: 'contained',
      label: 'Notice'
    },
    autoSend1TypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Auto send post adverse action'
    },
    autoSend2TypographyProps: {
      variant: 'body1',
      content: 'Days'
    },
    daysTextFieldProps: {
      variant: 'outlined',
      value: '6'
    }
  }
};
