import { Meta, StoryObj } from '@storybook/react';
import CandidateOrReportInfo from '.';
import EmailSVG from '../../../assets/svgs/Email.svg';
import DOBSVG from '../../../assets/svgs/Name.svg';

const meta: Meta<typeof CandidateOrReportInfo> = {
  component: CandidateOrReportInfo
};

export default meta;
type Story = StoryObj<typeof CandidateOrReportInfo>;

export const SampleCandidateOrReportInfo: Story = {
  args: {
    imageProps: {
      src: EmailSVG,
      alt: 'Email SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Email'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: 'John.smith@gmail.com'
    }
  }
};

export const DOBInfo: Story = {
  args: {
    imageProps: {
      src: DOBSVG,
      alt: 'DOB SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'DOB'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: '1990-04-22'
    }
  }
};
