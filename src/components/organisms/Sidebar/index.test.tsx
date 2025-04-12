import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Sidebar from '.';
import { describe, test, expect } from '@jest/globals';

import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const mockNavigate = jest.fn();
const mockClick = jest.fn();

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
mockedAxios.get.mockResolvedValue({
  data: {
    pageSize: 10,
    totalRecords: 15,
    list: [
      {
        id: '1',
        name: 'John',
        adjudicaion: '',
        status: 'CLEAR',
        location: 'Japan',
        date: ''
      },
      {
        id: '2',
        name: 'Rok',
        adjudicaion: '',
        status: 'CONSIDER',
        location: 'Mexico',
        date: ''
      }
    ]
  }
});

describe('Sidebar component', () => {
  //   const mockBackClick = jest.fn(),
  //     mockEngageClick = jest.fn();

  //   const defaultProps: CandidateInfoProps = {
  //     headerProps: {
  //       imageProps: {
  //         src: BackIcon,
  //         alt: 'Back Icon'
  //       },
  //       headingProps: {
  //         variant: 'h1',
  //         paragraph: false,
  //         content: 'Pre-Adverse action notice'
  //       }
  //     },
  //     autoSendNoticeItemProps: {
  //       noticeButtonProps: {
  //         variant: 'contained',
  //         label: 'Notice'
  //       },
  //       autoSend1TypographyProps: {
  //         variant: 'body1',
  //         paragraph: false,
  //         content: 'Auto send post adverse action'
  //       },
  //       autoSend2TypographyProps: {
  //         variant: 'body1',
  //         content: 'Days'
  //       },
  //       daysTextFieldProps: {
  //         variant: 'outlined'
  //       }
  //     }
  //   };

  test('renders Sidebar component with all the navigation buttons along with icons', async () => {
    // const { container } = render(<Sidebar {...defaultProps} />);
    render(
      <MemoryRouter>
        <Sidebar />
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

  test('renders Sidebar component with Recruit image and user details', async () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    expect(screen.queryByRole('img', { name: 'Recruit Image' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'CheckrrAvatar' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Logout SVG' })).toBeInTheDocument();
    expect(screen.queryByText(/jw@abc.com/i)).toBeInTheDocument();
    expect(screen.queryByText(/John Wesley/i)).toBeInTheDocument();
  });

  test('runs HandleClick function when clicking on any navigation button', async () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const candidateButton = screen.queryByText(/Candidates/i);
    expect(candidateButton).toBeInTheDocument();
    if (candidateButton) {
      candidateButton.onclick = mockClick;
    }
    await userEvent.click(candidateButton);
    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('img', { name: 'Recruit Image' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'CheckrrAvatar' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Logout SVG' })).toBeInTheDocument();
    expect(screen.queryByText(/jw@abc.com/i)).toBeInTheDocument();
    expect(screen.queryByText(/John Wesley/i)).toBeInTheDocument();
  });
});
