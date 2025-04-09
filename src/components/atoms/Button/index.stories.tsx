import { Meta, StoryObj } from '@storybook/react';
import { KeyboardArrowDown } from '@mui/icons-material';
import Button from '.';
import ExportSVG from '../../../assets/svgs/export.svg';
import AttachmentSVG from '../../../assets/svgs/attach.svg';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ExportButton: Story = {
  args: {
    variant: 'contained',
    label: 'Export',

    imageProps: {
      src: ExportSVG,
      alt: 'Export SVG'
    }
  }
};

export const AttachmentButton: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined Button',

    imageProps: {
      src: AttachmentSVG,
      alt: 'Manual Order SVG'
    }
  }
};

export const TextButton: Story = {
  args: {
    sx: {
      width: '100%',
      justifyContent: 'space-between',
      textTransform: 'capitalize'
    },
    variant: 'text',
    label: 'Candidate Information',
    endIcon: <KeyboardArrowDown />
  }
};
