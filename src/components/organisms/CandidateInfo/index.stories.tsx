import { Meta, StoryObj } from '@storybook/react';

import CandidateInfo from '.';
import BackIcon from '../../../assets/svgs/prev_screen.svg';

const meta: Meta<typeof CandidateInfo> = {
  component: CandidateInfo
};

export default meta;
type Story = StoryObj<typeof CandidateInfo>;

export const DefaultCandidateInfo: Story = {
  args: {
    headerProps: {
      imageProps: {
        src: BackIcon,
        alt: 'Back Icon'
      },
      headingProps: {
        variant: 'h1',
        paragraph: false,
        content: 'John Smith'
      },
      outlinedButtonProps: {
        variant: 'outlined',
        label: 'Pre-Adverse Action'
      },
      containedButtonProps: {
        variant: 'contained',
        label: 'Engage'
      }
    }
  }
};
