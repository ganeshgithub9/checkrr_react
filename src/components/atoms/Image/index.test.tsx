import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Image from '.';
import { describe, test, expect } from '@jest/globals';
import ProfileImage from '../../../assets/images/profile.png';

describe('Image component', () => {
  test('renders the Image', () => {
    render(<Image src={ProfileImage} alt="Profile Image" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src');
  });

  test('renders the alt text if the image src is absent', () => {
    render(<Image alt="Profile Image" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).not.toHaveAttribute('src');
    expect(imgElement).toHaveAttribute('alt', 'Profile Image');
  });
});
