import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AutoSendNoticeItem, { AutoSendNoticeItemProps } from '.';
import { describe, test, expect } from '@jest/globals';

describe('AutoSendNoticeItem component', () => {
  const defaultProps: AutoSendNoticeItemProps = {
    noticeButtonProps: {
      variant: 'contained',
      label: 'Notice'
    },
    autoSend1TypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Auto send post adverse action'
    },
    autoSend2TypographyProps: {
      variant: 'body1',
      content: 'Days'
    },
    daysTextFieldProps: {
      variant: 'outlined',
      value: '6'
    }
  };

  test('renders AutoSendNoticeItem having 1 button, 2 typographies and 1 text box', () => {
    render(<AutoSendNoticeItem {...defaultProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
    expect(screen.getAllByRole('paragraph')).toHaveLength(2);
  });

  test('renders the given content of AutoSendNoticeItem', () => {
    render(<AutoSendNoticeItem {...defaultProps} />);
    expect(screen.getByText('Auto send post adverse action')).toBeInTheDocument();
    expect(screen.getByText('Days')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Notice' })).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('6');
  });
});
