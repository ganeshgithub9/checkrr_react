import { Meta, StoryObj } from '@storybook/react';
import HeaderItem from '.';
import BackIcon from '../../../assets/svgs/prev_screen.svg';
import ExportIcon from '../../../assets/svgs/export.svg';
import ManualOrderIcon from '../../../assets/svgs/manual_order.svg';

const meta: Meta<typeof HeaderItem> = {
  component: HeaderItem
};

export default meta;
type Story = StoryObj<typeof HeaderItem>;

export const CandidateHeaderItem: Story = {
  args: {
    headingProps: {
      variant: 'h1',
      paragraph: false,
      content: 'Candidates'
    },
    outlinedButtonProps: {
      variant: 'outlined',
      label: 'Export',
      imageProps: {
        src: ExportIcon,
        alt: 'Export Icon'
      }
    },
    containedButtonProps: {
      variant: 'contained',
      label: 'Manual Order',
      imageProps: {
        src: ManualOrderIcon,
        alt: 'Manual Order Icon'
      }
    }
  }
};

export const PreAdverseActionHeaderItem: Story = {
  args: {
    imageProps: {
      src: BackIcon,
      alt: 'Back Icon'
    },
    headingProps: {
      variant: 'h1',
      paragraph: false,
      content: 'Pre-Adverse action notice'
    }
  }
};

export const CandidateInfoHeaderItem: Story = {
  args: {
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
};
