import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MailSuccessItem, { MailSuccessItemProps } from '.';
import { describe, test, expect } from '@jest/globals';
import SuccessGIF from '../../../assets/gifs/Success.gif';

describe('MailSuccessItem component', () => {
  const defaultProps: MailSuccessItemProps = {
    imageProps: {
      src: SuccessGIF,
      alt: 'Success GIF'
    },
    messageProps: {
      content: 'Pre-Adverse Action notice successfully sent'
    }
  };

  test('renders MailSuccessItem having an image and a typography', () => {
    render(<MailSuccessItem {...defaultProps} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });

  test('renders the given content of MailSuccessItem', () => {
    render(<MailSuccessItem {...defaultProps} />);
    expect(screen.getByRole('img')).toHaveAttribute('src');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Success GIF');
    expect(screen.getByText('Pre-Adverse Action notice successfully sent')).toBeInTheDocument();
  });
});
