import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination, { CustomPaginationProps } from '.';
import { describe, test, expect } from '@jest/globals';

describe('Pagination component', () => {
  const defaultProps: CustomPaginationProps = {
    count: 3,
    color: 'primary'
  };

  test('renders the pagination item with given no. of pages along with 2 navigation buttons correctly', () => {
    render(<Pagination {...defaultProps} />);
    const buttonElements: HTMLElement[] = screen.getAllByRole('button');
    expect(buttonElements).toHaveLength(5);
    //expect(textElement).toHaveTextContent('10 per page');
  });

  test('renders the pagination item which has page 2 button present', () => {
    render(<Pagination {...defaultProps} />);
    const textElement = screen.getByText('2');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeEnabled();
  });
});
