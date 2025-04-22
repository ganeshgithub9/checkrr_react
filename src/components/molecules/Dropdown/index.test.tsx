import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Dropdown, { CustomDropdownProps } from '.';
import { describe, test, expect } from '@jest/globals';

describe('Dropdown component', () => {
  const defaultProps: CustomDropdownProps = {
    inputLabelProps: {
      label: 'page size'
    },
    selectProps: {
      sx: {
        width: 120,
        height: 50
      },
      value: 10,
      label: '10 per page',
      inputProps: { 'data-testid': 'select-input' }
    },
    menuItems: [
      { value: 10, label: '10 per page' },
      { value: 20, label: '20 per page' },
      { value: 30, label: '30 per page' }
    ]
  };

  test('renders Dropdown combobox with a label', () => {
    render(<Dropdown {...defaultProps} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText(/page size/i)).toBeInTheDocument();
  });

  test('renders the Dropdown component with default value 10', async () => {
    render(<Dropdown {...defaultProps} />);
    const user = userEvent.setup();
    const comboBox = screen.getByRole('combobox');
    await user.click(comboBox);
    expect(screen.getAllByRole('option')).toHaveLength(3);
    expect(screen.getByRole('option', { name: '10 per page' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '20 per page' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '30 per page' })).toBeInTheDocument();
  });

  // test('calls onOptionChange method when user selects an option', async () => {
  //   const mockOnOptionChange = jest.fn();
  //   defaultProps.onOptionChange = mockOnOptionChange;
  //   render(<Dropdown {...defaultProps} />);
  //   expect(screen.queryByRole('combobox')).toBeInTheDocument();
  //   const selectInput = screen.getByTestId('select-input');
  //   fireEvent.mouseDown(selectInput);
  //   const listbox = screen.getByRole('listbox');
  //   const option = within(listbox).getByText('10 per page');
  //   fireEvent.click(option);
  //   expect(mockOnOptionChange).toHaveBeenCalledTimes(1);
  // });
});
