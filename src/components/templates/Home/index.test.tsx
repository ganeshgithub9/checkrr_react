import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';

import HomeTemplate from '../../templates/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home Template component', () => {
  test('renders Home Template', async () => {
    render(
      <MemoryRouter>
        <HomeTemplate />
      </MemoryRouter>
    );

    expect(screen.queryByText('Home')).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Home SVG' })).toBeInTheDocument();
    expect(screen.queryByText('Candidates')).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Candidates SVG' })).toBeInTheDocument();
    expect(screen.queryByText('Adverse Actions')).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Adverse Actions SVG' })).toBeInTheDocument();
    expect(screen.queryByText('Logs')).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Logs SVG' })).toBeInTheDocument();
    expect(screen.queryByText('Analytics')).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Analytics SVG' })).toBeInTheDocument();
    expect(screen.queryByText('Account')).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Account SVG' })).toBeInTheDocument();
    expect(screen.queryByText('Screenings')).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Screenings SVG' })).toBeInTheDocument();
  });
});
