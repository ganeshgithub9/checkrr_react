import { render, screen } from '@testing-library/react';
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
      label: '10 per page'
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
    expect(screen.getAllByRole('menuitem')).toHaveLength(3);
    expect(screen.getByRole('menuitem', { name: '10 per page' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: '20 per page' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: '30 per page' })).toBeInTheDocument();
  });
});
