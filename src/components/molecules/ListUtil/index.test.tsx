import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListUtil, { ListUtilProps } from '.';
import { describe, test, expect } from '@jest/globals';
import FilterSVG from '../../../assets/svgs/filter.svg';
import MoreSVG from '../../../assets/svgs/menu.svg';
describe('ListUtil component', () => {
  const defaultProps: ListUtilProps = {
    headingTypographyProps: {
      variant: 'subtitle1',
      paragraph: false,
      content: 'Candidates'
    },
    searchFieldProps: {
      autoFocus: false,
      placeholder: ' Search any candidate',
      variant: 'outlined'
    },
    filterButtonProps: {
      variant: 'outlined',

      imageProps: {
        src: FilterSVG,
        alt: 'Filter SVG'
      }
    },
    moreButtonProps: {
      variant: 'outlined',

      imageProps: {
        src: MoreSVG,
        alt: 'More SVG'
      }
    }
  };

  test('renders ListUtil component with 1 heading, 1 text box and 2 buttons', () => {
    render(<ListUtil {...defaultProps} />);

    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getAllByRole('heading')).toHaveLength(1);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  });

  test('renders the given content of ListUtil component', () => {
    render(<ListUtil {...defaultProps} />);
    expect(
      screen.getByText(defaultProps.headingTypographyProps?.content || '')
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      defaultProps.searchFieldProps?.placeholder || ''
    );
    const imgElements = screen.getAllByRole('img');
    expect(imgElements[0]).toHaveAttribute('src');
    expect(imgElements[0]).toHaveAttribute('alt', 'Filter SVG');
    expect(imgElements[1]).toHaveAttribute('src');
    expect(imgElements[1]).toHaveAttribute('alt', 'More SVG');
  });
});
