import { Meta, StoryObj } from '@storybook/react';
import Image from '.';
import RecruitImg from '../../../assets/images/recruit.png';
import ExportSVG from '../../../assets/svgs/export.svg';

const meta: Meta<typeof Image> = {
  component: Image
};

export default meta;
type Story = StoryObj<typeof Image>;

export const W3SchoolsImage: Story = {
  args: {
    src: 'https://www.w3schools.com/howto/img_avatar.png',
    alt: 'W3Schools Image'
  }
};

export const RecruitImage: Story = {
  args: {
    src: RecruitImg,
    alt: 'Recruit Image'
  }
};

export const NoImage: Story = {
  args: {
    src: '',
    alt: 'No Image'
  }
};

export const SVGImage: Story = {
  args: {
    src: ExportSVG,
    alt: 'Export SVG'
  }
};
