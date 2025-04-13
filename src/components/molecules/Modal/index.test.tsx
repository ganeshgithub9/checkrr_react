import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';
import Modal from '.';
import { ModalProps } from '@mui/material';
import MailSuccessItem from '../MailSuccessItem';
import SuccessGIF from '../../../assets/gifs/Success.gif';

describe('Modal component', () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
  };

  const defaultProps: ModalProps = {
    children: (
      <MailSuccessItem
        boxProps={{
          sx: {
            ...style,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }
        }}
        imageProps={{
          src: SuccessGIF,
          alt: 'Success GIF'
        }}
        messageProps={{
          content: 'Pre-Adverse Action notice successfully sent'
        }}
      />
    ),
    open: true
  };

  test('renders Modal with its children', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });

  test('renders the given content of Modal', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByRole('img')).toHaveAttribute('src');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Success GIF');
    expect(screen.getByText('Pre-Adverse Action notice successfully sent')).toBeInTheDocument();
  });
});
