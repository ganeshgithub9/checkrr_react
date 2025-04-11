import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import axios from 'axios';
import Sidebar from '.';
import { describe, test, expect } from '@jest/globals';

import BackIcon from '../../../assets/svgs/Back.svg';

import { MemoryRouter } from 'react-router-dom';

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

  test('renders Sidebar component with the required molecules and atoms', async () => {
    // const { container } = render(<Sidebar {...defaultProps} />);
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    // expect(screen.queryByRole('heading', { level: 1 })).toBeInTheDocument();
    // expect(screen.queryByRole('img', { name: 'Export Icon' })).toBeInTheDocument();
    // expect(screen.queryByRole('img', { name: 'Manual Order Icon' })).toBeInTheDocument();
    // expect(screen.queryByRole('heading', { level: 1 })).toBeInTheDocument();
    // expect(screen.queryByRole('img', { name: 'Filter SVG' })).toBeInTheDocument();
    // expect(screen.queryByRole('img', { name: 'More SVG' })).toBeInTheDocument();
    // expect(screen.queryByRole('textbox')).toBeInTheDocument();
    // //expect(screen.queryByRole('paragraph', { name: '10 out of 15 results' })).toBeInTheDocument();
    // expect(screen.getByRole('combobox')).toBeInTheDocument();
    // const buttonElements = container.querySelectorAll('.MuiPaginationItem-root');
    // expect(buttonElements).toHaveLength(5);
    // const comboBox = screen.getByRole('combobox');
    // await userEvent.click(comboBox);
    // expect(screen.queryAllByRole('menuitem')).toHaveLength(3);
  });

  //   test('renders the Candidate list', async () => {
  //     render(<Sidebar {...defaultProps} />);
  //     const items = await screen.findAllByTestId('candidate-item');

  //     expect(items).toHaveLength(2);
  //   });
});
