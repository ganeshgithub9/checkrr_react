import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';

import ScreeningsPage from '../../pages/Screenings';

describe('Screenings page component', () => {
  test('renders Screenings page', async () => {
    render(<ScreeningsPage />);

    expect(screen.queryByText('Screenings')).toBeInTheDocument();
  });
});
