import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfileItem, { ProfileItemProps } from '.';
import { describe, test, expect } from '@jest/globals';
import SampleAvatar from '../../../assets/images/profile.png';
import LogOutSVG from '../../../assets/svgs/logout.svg';

describe('ProfileItem component', () => {
  const defaultProps: ProfileItemProps = {
    avatarProps: {
      src: SampleAvatar,
      alt: 'CheckrrAvatar',
      size: '36px'
    },
    nameTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'John Wesley'
    },
    mailTypographyProps: {
      variant: 'caption',
      paragraph: false,
      content: 'jw@abc.com'
    },
    logOutImageprops: {
      src: LogOutSVG,
      alt: 'Logout SVG'
    }
  };

  test('renders ProfileItem having 1 button, 2 typographies and 1 text box', () => {
    render(<ProfileItem {...defaultProps} />);

    expect(screen.getByRole('paragraph')).toBeInTheDocument();

    expect(screen.queryAllByRole('img')).toHaveLength(2);
    expect(screen.getByRole('img', { name: 'CheckrrAvatar' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Logout SVG' })).toBeInTheDocument();
  });

  test('renders the given content of ProfileItem', () => {
    render(<ProfileItem {...defaultProps} />);
    expect(screen.getByRole('img', { name: 'CheckrrAvatar' })).toHaveAttribute('src');
    expect(screen.getByRole('img', { name: 'Logout SVG' })).toHaveAttribute('src');
    expect(screen.getByText('John Wesley')).toBeInTheDocument();
    expect(screen.getByText('jw@abc.com')).toBeInTheDocument();
  });
});
