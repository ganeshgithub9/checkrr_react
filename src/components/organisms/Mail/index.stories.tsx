import { Meta, StoryObj } from '@storybook/react';
import Mail from '.';
import BackIcon from '../../../assets/svgs/Back.svg';

const meta: Meta<typeof Mail> = {
  component: Mail
};

export default meta;
type Story = StoryObj<typeof Mail>;

export const CandidateMail: Story = {
  args: {
    headerProps: {
      imageProps: {
        src: BackIcon,
        alt: 'Back Icon'
      },
      headingProps: {
        variant: 'h1',
        paragraph: false,
        content: 'Pre-Adverse action notice'
      }
    },
    autoSendNoticeItemProps: {
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
        variant: 'outlined'
      }
    }
  }
};
