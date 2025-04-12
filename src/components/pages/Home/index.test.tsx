import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';

import HomePage from '.';

describe('Home page component', () => {
  test('renders Home page', async () => {
    render(<HomePage />);

    expect(screen.queryByText('Home')).toBeInTheDocument();
  });
});
