import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import FiltersBox, { FiltersBoxProps } from '.';
import { describe, test, expect } from '@jest/globals';
import {
  statusFilterCheckboxLabels,
  adjudicationFilterCheckboxLabels
} from '../../constants/objects';

const mockStateChange = jest.fn();
describe('FiltersBox component', () => {
  const defaultProps: FiltersBoxProps = {
    checkboxLabels: statusFilterCheckboxLabels,
    heading: 'Filters',
    subHeading: 'Status',
    subHeading2: 'Adjudication',
    checkboxLabels2: adjudicationFilterCheckboxLabels,
    onStateChange: mockStateChange
  };

  test('renders FiltersBox component with headings and subheadings', () => {
    render(<FiltersBox {...defaultProps} />);
    expect(screen.queryByText('Filters')).toBeInTheDocument();
    expect(screen.queryByText('Status')).toBeInTheDocument();
    expect(screen.queryByText('Adjudication')).toBeInTheDocument();
  });

  test('renders the FiltersBox component with checkboxes', async () => {
    render(<FiltersBox {...defaultProps} />);
    // const user = userEvent.setup();
    // const comboBox = screen.getByRole('combobox');
    // await user.click(comboBox);
    expect(screen.getAllByRole('checkbox')).toHaveLength(6);
    // expect(screen.getByRole('option', { name: '10 per page' })).toBeInTheDocument();
    // expect(screen.getByRole('option', { name: '20 per page' })).toBeInTheDocument();
    // expect(screen.getByRole('option', { name: '30 per page' })).toBeInTheDocument();
  });

  test('calls the stateChange method when checkbox is clicked', async () => {
    render(<FiltersBox {...defaultProps} />);
    // const user = userEvent.setup();
    // const comboBox = screen.getByRole('combobox');
    // await user.click(comboBox);
    const clearCheckbox = screen.getByRole('checkbox', {
      name: 'Clear'
    });
    await userEvent.click(clearCheckbox);
    expect(mockStateChange).toHaveBeenCalledTimes(1);
    //expect(screen.getAllByRole('checkbox')).toHaveLength(6);
    // expect(screen.getByRole('option', { name: '10 per page' })).toBeInTheDocument();
    // expect(screen.getByRole('option', { name: '20 per page' })).toBeInTheDocument();
    // expect(screen.getByRole('option', { name: '30 per page' })).toBeInTheDocument();
  });
});
