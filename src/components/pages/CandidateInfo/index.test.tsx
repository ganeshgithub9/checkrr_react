import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import CandidateInfoPage from '.';
import { describe, test, expect } from '@jest/globals';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    __esModule: true,
    ...originalModule,
    useNavigate: () => mockNavigate,
    useParams: () => ({ id: '1' }),
    useLocation: () => ({ pathname: '/current/path' })
  };
});

describe('CandidateInfo component', () => {
  test('renders CandidateInfo component having a header component and 3 data containers', () => {
    render(<CandidateInfoPage />);

    expect(screen.queryByRole('img', { name: 'Back Icon' })).toBeInTheDocument();
    expect(screen.queryByRole('heading')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Pre-Adverse Action' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Engage' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Candidate Information' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Report Information' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Court Searches' })).toBeInTheDocument();
  });

  test('renders the given content of CandidateInfo', () => {
    render(<CandidateInfoPage />);

    const adverseActionButton = screen.getByRole('button', { name: 'Pre-Adverse Action' });
    fireEvent.click(adverseActionButton);
    expect(mockNavigate).toHaveBeenCalledWith('/candidates/1/pre-adverse-action');
    expect(mockNavigate).toHaveBeenCalledTimes(1);

    const candidateInfoButton = screen.getByRole('button', { name: 'Candidate Information' });
    fireEvent.click(candidateInfoButton);
    expect(screen.queryByText(/name/i)).toBeInTheDocument();
  });

  test('renders th', () => {
    render(<CandidateInfoPage />);

    const adverseActionButton = screen.getByRole('button', { name: 'Pre-Adverse Action' });
    fireEvent.click(adverseActionButton);
    expect(mockNavigate).toHaveBeenCalledWith('/candidates/1/pre-adverse-action');
    expect(mockNavigate).toHaveBeenCalledTimes(2);

    const candidateInfoButton = screen.getByRole('button', { name: 'Candidate Information' });
    fireEvent.click(candidateInfoButton);
    expect(screen.queryByText(/name/i)).toBeInTheDocument();
  });

  test('Navigates to the previous screen when user clicked on back icon', async () => {
    render(<CandidateInfoPage />);
    const backIcon = screen.getByRole('img', { name: 'Back Icon' });
    await userEvent.click(backIcon);
    expect(mockNavigate).toHaveBeenCalledTimes(3);
  });
});
