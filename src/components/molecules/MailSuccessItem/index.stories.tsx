import { Meta, StoryObj } from '@storybook/react';
import MailSuccessItem from '.';
import SuccessGIF from '../../../assets/gifs/success.gif';

const meta: Meta<typeof MailSuccessItem> = {
  component: MailSuccessItem
};

export default meta;
type Story = StoryObj<typeof MailSuccessItem>;

export const PrimaryMailSuccessItem: Story = {
  args: {
    imageProps: {
      src: SuccessGIF,
      alt: 'Success GIF'
    },
    messageProps: {
      content: 'Pre-Adverse Action notice successfully sent'
    }
  }
};
