import { Meta, StoryObj } from '@storybook/react';
import Avatar from '.';
import SampleAvatar from '../../../assets/images/profile.png';
const meta: Meta<typeof Avatar> = {
  component: Avatar
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const W3SchoolsAvatar: Story = {
  args: {
    src: 'https://www.w3schools.com/howto/img_avatar.png',
    alt: 'W3SchoolsAvatar',
    size: '50px'
  }
};

export const CheckrrAvatar: Story = {
  args: {
    src: SampleAvatar,
    alt: 'CheckrrAvatar',
    size: '36px'
  }
};

export const NoAvatar: Story = {
  args: {
    alt: 'NoAvatar',
    size: '50px'
    //children: 'P'
  }
};
