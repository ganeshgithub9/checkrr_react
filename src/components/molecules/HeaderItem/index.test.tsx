import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderItem, { HeaderItemProps } from '.';
import { describe, test, expect } from '@jest/globals';
import BackIcon from '../../../assets/svgs/Back.svg';

describe('HeaderItem component', () => {
  const defaultProps: HeaderItemProps = {
    imageProps: {
      src: BackIcon,
      alt: 'Back Icon'
    },
    headingProps: {
      variant: 'h1',
      paragraph: false,
      content: 'John Smith'
    },
    outlinedButtonProps: {
      variant: 'outlined',
      label: 'Pre-Adverse Action'
    },
    containedButtonProps: {
      variant: 'contained',
      label: 'Engage'
    }
  };

  test('renders HeaderItem component having 1 image, 1 heading and 2 buttons', () => {
    render(<HeaderItem {...defaultProps} />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.queryByRole('img', { name: 'Back Icon' })).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('renders the given content of HeaderItem', () => {
    render(<HeaderItem {...defaultProps} />);

    expect(screen.queryAllByRole('img', { name: 'Back Icon' })[0]).toHaveAttribute('src');
    expect(screen.getByRole('heading')).toHaveTextContent(defaultProps.headingProps?.content || '');
    expect(screen.queryByRole('button', { name: 'Pre-Adverse Action' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Engage' })).toBeInTheDocument();
  });
});
