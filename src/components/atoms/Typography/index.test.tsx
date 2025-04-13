import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Typography, { CustomTypographyProps } from '.';
import { describe, test, expect } from '@jest/globals';

describe('Typography component', () => {
  const defaultProps: CustomTypographyProps = {
    content: 'Hello',
    variant: 'h1',
    align: 'left'
  };

  test('renders the given text on the screen', () => {
    render(<Typography {...defaultProps} />);
    expect(screen.queryByText('Hello')).toBeInTheDocument();
  });

  test('renders the text with given variant and alignment', () => {
    render(<Typography {...defaultProps} />);
    expect(screen.queryByRole('heading')).toBeInTheDocument();
    expect(screen.queryByRole('heading')).toHaveTextContent('Hello');
    expect(screen.queryByRole('heading')).toHaveAttribute('style', '--Typography-textAlign: left;');
  });
});
