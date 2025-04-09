import { Meta, StoryObj } from '@storybook/react';
import ListUtil from '.';
import FilterSVG from '../../../assets/svgs/filter.svg';
import MoreSVG from '../../../assets/svgs/menu.svg';

const meta: Meta<typeof ListUtil> = {
  component: ListUtil
};

export default meta;
type Story = StoryObj<typeof ListUtil>;

export const PrimaryListUtil: Story = {
  args: {
    headingTypographyProps: {
      variant: 'subtitle1',
      paragraph: false,
      content: 'Candidates'
    },
    searchFieldProps: {
      autoFocus: false,
      placeholder: ' Search any candidate',
      variant: 'outlined'
    },
    filterButtonProps: {
      variant: 'outlined',

      imageProps: {
        src: FilterSVG,
        alt: 'Filter SVG'
      }
    },
    moreButtonProps: {
      variant: 'outlined',

      imageProps: {
        src: MoreSVG,
        alt: 'More SVG'
      }
    }
  }
};
