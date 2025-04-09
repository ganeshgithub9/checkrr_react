import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { CustomButtonProps } from '.';
import { describe, test, expect } from '@jest/globals';

describe('Button component', () => {
  const mockClickHandler = jest.fn();

  const defaultProps: CustomButtonProps = {
    label: 'Click Me',
    onClick: mockClickHandler
  };

  test('renders the Button with correct label', () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
  });

  test('calls onClick handler when clicked', () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });

  test('has the disabled attribute when disabled', () => {
    render(<Button {...defaultProps} disabled />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });
});
