import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import axios from 'axios';
import PreAdverseActionNoticePage from '.';
import { describe, test, expect } from '@jest/globals';

import BackIcon from '../../../assets/svgs/Back.svg';

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

describe('Mail component', () => {
  const defaultProps: CandidateInfoProps = {
    headerProps: {
      imageProps: {
        src: BackIcon,
        alt: 'Back Icon'
      },
      headingProps: {
        variant: 'h1',
        paragraph: false,
        content: 'Pre-Adverse action notice'
      }
    },
    autoSendNoticeItemProps: {
      noticeButtonProps: {
        variant: 'contained',
        label: 'Notice'
      },
      autoSend1TypographyProps: {
        variant: 'body1',
        paragraph: false,
        content: 'Auto send post adverse action'
      },
      autoSend2TypographyProps: {
        variant: 'body1',
        content: 'Days'
      },
      daysTextFieldProps: {
        variant: 'outlined'
      }
    }
  };

  test('renders Mail content on the web page', async () => {
    render(<PreAdverseActionNoticePage />);

    expect(screen.queryByText(/Pre-Adverse action notice-Checkr-Bpo/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /You are recently authorized checkr-bpo to obtain consumer reports and investigate consumer reports about you from a consumer reporting agency. The company is considering taking action in whole or in past on information in such reports including the following specific items identified in the report prepared by Checkr Inc./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Select the charges for the Pre-Adverse action/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /If you wish to dispute the accuracy of the information in the report direclty with the consumer reporting agency i.e.. the source of the information contained in the report, you should contact the agency directly./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Sincerely/i)).toBeInTheDocument();
    expect(screen.getByText(/CheckrBpo/i)).toBeInTheDocument();
  });

  test('renders the Mail review content on Modal after clicking on preview', async () => {
    render(<PreAdverseActionNoticePage />);
    const assaultCheckbox = screen.getByRole('checkbox', { name: 'Assault Domestic Violence' });

    await userEvent.click(assaultCheckbox);

    expect(assaultCheckbox).toBeChecked();
    const noticeButton = screen.getByRole('button', { name: 'Notice' });
    await userEvent.click(noticeButton);
    expect(screen.queryAllByText(/Pre-Adverse action notice-Checkr-Bpo/i)).toHaveLength(2);
    expect(
      screen.queryAllByText(
        /You are recently authorized checkr-bpo to obtain consumer reports and investigate consumer reports about you from a consumer reporting agency. The company is considering taking action in whole or in past on information in such reports including the following specific items identified in the report prepared by Checkr Inc./i
      )
    ).toHaveLength(2);
    expect(screen.queryAllByText(/Select the charges for the Pre-Adverse action/i)).toHaveLength(2);
    expect(
      screen.queryAllByText(
        /If you wish to dispute the accuracy of the information in the report direclty with the consumer reporting agency i.e.. the source of the information contained in the report, you should contact the agency directly./i
      )
    ).toHaveLength(2);
    expect(screen.queryAllByText(/Sincerely/i)).toHaveLength(2);
    expect(screen.queryAllByText(/CheckrBpo/i)).toHaveLength(2);
    expect(screen.queryAllByText(/Assault Domestic Violence/i)).toHaveLength(2);
    expect(screen.queryAllByText(/Driving while license suspended/i)).toHaveLength(1);
    expect(screen.queryAllByText(/Unable to verify employment history/i)).toHaveLength(1);
  });

  test('Navigates to the previous screen when user clicked on back icon', async () => {
    render(<PreAdverseActionNoticePage />);
    const backIcon = screen.getByRole('img', { name: 'Back Icon' });

    await userEvent.click(backIcon);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});
