import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import CandidateInfo, { CandidateInfoProps } from '.';
import { describe, test, expect } from '@jest/globals';
import BackIcon from '../../../assets/svgs/Back.svg';

//import { BrowserRouter as Router } from 'react-router-dom';

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

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.get.mockImplementation((url) => {
  switch (url) {
    case 'http://localhost:3000/candidate-info/1':
      return Promise.resolve({
        data: {
          id: '1',
          name: 'John Smith',
          email: 'John.smith@checkr.com',
          dob: '1990-09-10',
          phone: '555-555-5555',
          zipcode: '94158',
          socialSecurity: 'XXX-XX-66789',
          driversLicense: 'FTEST1111',
          createdAt: 'Nov 28, 2016 11:05:57 AM'
        }
      });
    case 'http://localhost:3000/report-info/1':
      return Promise.resolve({
        data: {
          id: '1',
          status: 'Clear',
          adjudicaion: 'Engage',
          package: 'Employee Pro',
          createdAt: 'Nov 28, 2016 11:05:57 AM',
          completedDate: 'Dec 4, 2016 12:00:00 PM',
          turnAroundTime: '1 Day, 14 hours'
        }
      });
    default:
      return Promise.resolve({
        data: {
          id: '1',
          list: [
            { id: '1', search: 'SSN Verification', status: 'CLEAR', date: '2/22/2022' },
            { id: '2', search: 'Sex Offender', status: 'CLEAR', date: '3/13/2022' },
            { id: '3', search: 'Global Watchlist', status: 'CONSIDER', date: '7/2/2022' },
            { id: '4', search: 'Federal Criminal', status: 'CLEAR', date: '2/20/2022' },
            { id: '5', search: 'World Criminal', status: 'CONSIDER', date: '5/19/2022' }
          ]
        }
      });
  }
});

describe('CandidateInfo component', () => {
  const mockBackClick = jest.fn(),
    mockEngageClick = jest.fn();
  const defaultProps: CandidateInfoProps = {
    headerProps: {
      imageProps: {
        src: BackIcon,
        alt: 'Back Icon',
        onClick: mockBackClick
      },
      headingProps: {
        variant: 'h1',
        paragraph: false,
        content: 'John Smith'
      },
      outlinedButtonProps: {
        variant: 'outlined',
        label: 'Pre-Adverse Action'
      },
      containedButtonProps: {
        variant: 'contained',
        label: 'Engage',
        onClick: mockEngageClick
      }
    }
  };

  test('renders CandidateInfo component having a header component and 3 data containers', () => {
    render(<CandidateInfo {...defaultProps} />);

    expect(screen.queryByRole('img', { name: 'Back Icon' })).toBeInTheDocument();
    expect(screen.queryByRole('heading')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Pre-Adverse Action' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Engage' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Candidate Information' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Report Information' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Court Searches' })).toBeInTheDocument();
  });

  test('renders the given content of CandidateInfo', () => {
    render(<CandidateInfo {...defaultProps} />);

    const backIcon = screen.getByRole('img', { name: 'Back Icon' });
    fireEvent.click(backIcon);
    expect(mockBackClick).toHaveBeenCalledTimes(1);
    const adverseActionButton = screen.getByRole('button', { name: 'Pre-Adverse Action' });
    fireEvent.click(adverseActionButton);
    expect(mockNavigate).toHaveBeenCalledWith('/candidates/1/pre-adverse-action');
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    const engageButton = screen.getByRole('button', { name: 'Engage' });
    fireEvent.click(engageButton);
    expect(mockEngageClick).toHaveBeenCalledTimes(1);
    const candidateInfoButton = screen.getByRole('button', { name: 'Candidate Information' });
    fireEvent.click(candidateInfoButton);
    expect(screen.queryByText(/name/i)).toBeInTheDocument();
  });

  test('displays the report information of a particular candidate', async () => {
    render(<CandidateInfo {...defaultProps} />);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(9); // 9 represents the axios.get calls from above tests as well since we mocked it globally
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/report-info/1');
      //   expect(screen.queryByText(/engage/i)).toBeInTheDocument();
    });
    const reportInfoButton = screen.getByRole('button', { name: 'Report Information' });
    await userEvent.click(reportInfoButton);
    expect(screen.queryByText(/engage/i)).toBeInTheDocument();
    expect(screen.queryByText(/employee pro/i)).toBeInTheDocument();
  });

  test('displays the court search information of a particular candidate', async () => {
    render(<CandidateInfo {...defaultProps} />);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(12); // 9 represents the axios.get calls from above tests as well since we mocked it globally
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/candidate-courtsearches/1');
      //   expect(screen.queryByText(/engage/i)).toBeInTheDocument();
    });
    const courtSearchInfoButton = screen.getByRole('button', { name: 'Court Searches' });
    await userEvent.click(courtSearchInfoButton);
    expect(screen.queryByText(/World Criminal/i)).toBeInTheDocument();
    expect(screen.queryByText(/Global Watchlist/i)).toBeInTheDocument();
  });
});
