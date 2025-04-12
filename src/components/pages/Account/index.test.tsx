import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';

import AccountPage from '../../pages/Account';

describe('Account page component', () => {
  test('renders Account page', async () => {
    render(<AccountPage />);

    expect(screen.queryByText('Account')).toBeInTheDocument();
  });
});
