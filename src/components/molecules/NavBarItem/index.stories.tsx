import { Meta, StoryObj } from '@storybook/react';
import NavBarItem from '.';
import CandidateIcon from '../../../assets/svgs/candidates.svg';
import HomeIcon from '../../../assets/svgs/home.svg';

const meta: Meta<typeof NavBarItem> = {
  component: NavBarItem
};

export default meta;
type Story = StoryObj<typeof NavBarItem>;

export const CandidatesNavBarItem: Story = {
  args: {
    imageProps: {
      src: CandidateIcon,
      alt: 'Candidates SVG'
    },
    typographyProps: {
      variant: 'body1',
      content: 'Candidates'
    }
  }
};

export const HomeNavBarItem: Story = {
  args: {
    imageProps: {
      src: HomeIcon,
      alt: 'Home SVG'
    },
    typographyProps: {
      variant: 'body1',
      content: 'Home'
    }
  }
};
