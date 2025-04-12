import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';

import LogsPage from '../../pages/Logs';

describe('Logs page component', () => {
  test('renders Logs page', async () => {
    render(<LogsPage />);

    expect(screen.queryByText('Logs')).toBeInTheDocument();
  });
});
