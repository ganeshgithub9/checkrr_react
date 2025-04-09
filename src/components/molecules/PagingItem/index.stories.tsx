import { Meta, StoryObj } from '@storybook/react';
import Pagingtem from '.';

const meta: Meta<typeof Pagingtem> = {
  component: Pagingtem
};

export default meta;
type Story = StoryObj<typeof Pagingtem>;

export const CandidatePagingtem: Story = {
  args: {
    pagingTypographyProps: {
      variant: 'body1',
      content: '10 out of 84 results'
    },
    dropdownProps: {
      inputLabelProps: {
        label: 'page size'
      },
      selectProps: {
        sx: {
          width: 120,
          height: 26
        },
        value: 10,
        label: '10 per page'
      },
      menuItems: [
        { value: 10, label: '10 per page' },
        { value: 20, label: '20 per page' },
        { value: 30, label: '30 per page' }
      ]
    },
    paginationProps: {
      count: 3,
      shape: 'rounded'
    }
  }
};
