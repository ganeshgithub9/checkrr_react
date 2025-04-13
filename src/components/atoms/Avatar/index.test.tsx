import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Avatar, { CustomAvatarProps } from '.';
import { describe, test, expect } from '@jest/globals';
import ProfileImage from '../../../assets/images/profile.png';

describe('Avatar component', () => {
  const defaultProps: CustomAvatarProps = {
    src: ProfileImage,
    alt: 'Profile Image',
    size: '50px'
  };

  test('renders the given source as Avatar', () => {
    render(<Avatar {...defaultProps} />);
    expect(screen.getByRole('img')).toHaveAttribute('src');
  });

  test('renders children text as fallback if src is not given', () => {
    render(<Avatar>Hello</Avatar>);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  test('renders generic person icon as fallback is src and children are absent', () => {
    render(<Avatar alt="No image" />);
    expect(screen.queryByText('No image')).not.toBeInTheDocument();
  });
});
