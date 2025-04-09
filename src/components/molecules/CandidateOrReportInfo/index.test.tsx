import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CandidateOrReportInfo, { CandidateOrReportInfoProps } from '.';
import { describe, test, expect } from '@jest/globals';
import EmailSVG from '../../../assets/svgs/Email.svg';

describe('CandidateOrReportInfo component', () => {
  const defaultProps: CandidateOrReportInfoProps = {
    imageProps: {
      src: EmailSVG,
      alt: 'Email SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      content: 'Email'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: 'John.smith@gmail.com'
    }
  };

  test('renders CandidateOrReportInfo component with 1 image and 2 paragraph elements', () => {
    render(<CandidateOrReportInfo {...defaultProps} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('paragraph')).toHaveLength(2);
  });

  test('renders the given content of CandidateOrReportInfo', () => {
    render(<CandidateOrReportInfo {...defaultProps} />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('John.smith@gmail.com')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Email SVG');
  });
});
