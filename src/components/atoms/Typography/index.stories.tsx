import { Meta, StoryObj } from '@storybook/react';
import Typography from '.';

const meta: Meta<typeof Typography> = {
  component: Typography
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const H1Typography: Story = {
  args: {
    variant: 'h1',
    paragraph: false,
    align: 'center',
    content: 'Hello'
  }
};

export const Body1Typography: Story = {
  args: {
    variant: 'body1',
    paragraph: false,
    align: 'right',
    content: 'Hello'
  }
};

export const ParagraphTypography: Story = {
  args: {
    variant: 'caption',
    paragraph: true,
    align: 'left',
    content: 'Hello'
  }
};
