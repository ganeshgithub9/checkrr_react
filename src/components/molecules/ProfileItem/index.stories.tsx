import { Meta, StoryObj } from '@storybook/react';
import ProfileItem from '.';
import SampleAvatar from '../../../assets/images/profile.png';
import LogOutSVG from '../../../assets/svgs/logout.svg';

const meta: Meta<typeof ProfileItem> = {
  component: ProfileItem
};

export default meta;
type Story = StoryObj<typeof ProfileItem>;

export const SampleProfileItem: Story = {
  args: {
    avatarProps: {
      src: SampleAvatar,
      alt: 'CheckrrAvatar',
      size: '36px'
    },
    nameTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'John Wesley'
    },
    mailTypographyProps: {
      variant: 'caption',
      paragraph: false,
      content: 'jw@abc.com'
    },
    logOutImageprops: {
      src: LogOutSVG,
      alt: 'Logout SVG'
    }
  }
};
