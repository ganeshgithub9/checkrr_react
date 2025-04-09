import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBarItem, { NavBarItemProps } from '.';
import { describe, test, expect } from '@jest/globals';
import CandidateIcon from '../../../assets/svgs/candidates.svg';

describe('NavBarItem component', () => {
  const defaultProps: NavBarItemProps = {
    imageProps: {
      src: CandidateIcon,
      alt: 'Candidates SVG'
    },
    typographyProps: {
      variant: 'body1',
      content: 'Candidates'
    }
  };

  test('renders NavBarItem having an icon followed by text', () => {
    render(<NavBarItem {...defaultProps} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });

  test('renders the given content of NavBarItem', () => {
    render(<NavBarItem {...defaultProps} />);
    expect(screen.getByText(defaultProps.typographyProps.content || '')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Candidates SVG');
  });
});
