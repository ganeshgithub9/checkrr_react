import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuItem, { CustomMenuItemProps } from '.';
import { describe, test, expect } from '@jest/globals';

describe('MenuItem component', () => {
  const defaultProps: CustomMenuItemProps = {
    label: '10 per page',
    value: 10
  };

  test('renders the MenuItem with label correctly', () => {
    render(<MenuItem {...defaultProps} />);
    const textElement = screen.getByText('10 per page');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('10 per page');
  });

  test('renders the MenuItem which hold a value behind', () => {
    render(<MenuItem {...defaultProps} />);
    const textElement = screen.getByText('10 per page');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveAttribute('value', '10');
  });
});
