import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import PagingItem, { PagingItemProps } from '.';
import { describe, test, expect } from '@jest/globals';

describe('PagingItem component', () => {
  const defaultProps: PagingItemProps = {
    pagingTypographyProps: {
      variant: 'body1',
      content: '10 out of 84 results'
    },
    dropdownProps: {
      inputLabelProps: {
        label: 'page size'
      },
      selectProps: {
        sx: {
          width: 120,
          height: 26
        },
        value: 10,
        label: '10 per page'
      },
      menuItems: [
        { value: 10, label: '10 per page' },
        { value: 20, label: '20 per page' },
        { value: 30, label: '30 per page' }
      ]
    },
    paginationProps: {
      count: 3,
      shape: 'rounded'
    }
  };
  const user = userEvent.setup();

  test('renders PagingItem having 1 button, 2 typographies and 1 text box', async () => {
    render(<PagingItem {...defaultProps} />);
    expect(screen.queryByRole('paragraph')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    const buttonElements: HTMLElement[] = screen.queryAllByRole('button');
    expect(buttonElements).toHaveLength(5);
    const comboBox = screen.getByRole('combobox');
    await user.click(comboBox);
    expect(screen.queryAllByRole('menuitem')).toHaveLength(3);
  });

  test('renders the given content of PagingItem', async () => {
    render(<PagingItem {...defaultProps} />);
    expect(screen.queryByRole('paragraph')).toBeInTheDocument();
    expect(screen.queryByRole('paragraph')).toHaveTextContent(
      defaultProps.pagingTypographyProps?.content || ''
    );
    expect(screen.getByText('page size')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    const comboBox = screen.getByRole('combobox');
    await user.click(comboBox);
    expect(screen.getAllByRole('menuitem')).toHaveLength(3);
    expect(screen.getByRole('menuitem', { name: '10 per page' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: '20 per page' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: '30 per page' })).toBeInTheDocument();
  });
});
