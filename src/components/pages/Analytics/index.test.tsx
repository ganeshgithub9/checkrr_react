import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';

import AnalyticsPage from '../../pages/Analytics';

describe('Analytics page component', () => {
  test('renders Analytics page', async () => {
    render(<AnalyticsPage />);

    expect(screen.queryByText('Analytics')).toBeInTheDocument();
  });
});
