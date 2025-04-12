import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';

import AccountPage from '../../pages/Account';

describe('Home page component', () => {
  test('renders Home page', async () => {
    render(<AccountPage />);

    expect(screen.queryByText('Account')).toBeInTheDocument();
  });
});
