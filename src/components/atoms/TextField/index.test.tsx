import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField, { CustomTextFieldProps } from '.';
import { describe, test, expect } from '@jest/globals';

describe('TextField component', () => {
  const mockChangeHandler = jest.fn();

  const defaultProps: CustomTextFieldProps = {
    placeholder: 'Search',
    onChange: mockChangeHandler
  };

  test('renders the placeholder inside TextField correctly', () => {
    render(<TextField {...defaultProps} />);
    const inputElement = screen.getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls the OnChange callback while user types', () => {
    render(<TextField {...defaultProps} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: 'hello' } });
    expect(mockChangeHandler).toHaveBeenCalledTimes(1);
  });
});
