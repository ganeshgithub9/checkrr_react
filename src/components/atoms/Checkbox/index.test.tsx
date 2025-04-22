import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox, { CustomCheckBoxProps } from '.';
import { describe, test, expect } from '@jest/globals';

describe('Checkbox component', () => {
  const mockStateChange = jest.fn();

  const defaultProps: CustomCheckBoxProps = {
    control: <input type="checkbox" />,
    label: 'Check Me',
    onStateChange: mockStateChange
  };

  test('renders the Checkbox with correct label', () => {
    render(<Checkbox {...defaultProps} />);
    expect(screen.getByText('Check Me')).toBeInTheDocument();
  });

  test('calls onChange handler when clicked', () => {
    render(<Checkbox {...defaultProps} />);
    const CheckboxElement = screen.getByRole('checkbox');
    fireEvent.click(CheckboxElement);
    expect(mockStateChange).toHaveBeenCalledTimes(1);
  });

  test('checked when the checked attribute is set', () => {
    render(<Checkbox {...defaultProps} checked />);
    const CheckboxElement = screen.getByRole('checkbox');
    expect(CheckboxElement).toBeChecked();
  });
});
