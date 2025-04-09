import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chip, { CustomChipProps } from '.';
import { describe, test, expect } from '@jest/globals';

describe('Chip component', () => {
  const defaultProps: CustomChipProps = {
    label: 'CLEAR',
    variant: 'filled'
  };

  test('renders the Chip with correct label', () => {
    render(<Chip {...defaultProps} />);
    expect(screen.getByText('CLEAR')).toBeInTheDocument();
  });

  test('renders chip with filled variant by default', () => {
    const { container } = render(<Chip {...defaultProps} data-testid="chip" />);
    const chip = container.querySelector('.MuiChip-filled');
    expect(chip).toBeInTheDocument();
  });
});
