import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import axios from 'axios';
import Candidates, { CandidatesProps } from '.';
import { describe, test, expect } from '@jest/globals';
import FilterSVG from '../../../assets/svgs/filter.svg';
import MoreSVG from '../../../assets/svgs/More.svg';
import ExportIcon from '../../../assets/svgs/export.svg';
import ManualOrderIcon from '../../../assets/svgs/manual_order.svg';
import { wait } from '@testing-library/user-event/dist/types/utils';

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
    first: 0,
    last: 0,
    prev: 0,
    next: 0,
    pages: 0,
    items: 0,
    data: [
      {
        id: '1',
        name: 'John',
        adjudication: 'ENGAGE',
        status: 'CLEAR',
        location: 'Japan',
        date: ''
      },
      {
        id: '2',
        name: 'Rok',
        adjudication: '',
        status: 'CONSIDER',
        location: 'Mexico',
        date: ''
      }
    ]
  }
});

describe('Candidates component', () => {
  const defaultProps: CandidatesProps = {
    headerProps: {
      headingProps: {
        variant: 'h1',
        paragraph: false,
        content: 'Candidates'
      },
      outlinedButtonProps: {
        variant: 'outlined',
        label: 'Export',
        imageProps: {
          src: ExportIcon,
          alt: 'Export Icon'
        }
      },
      containedButtonProps: {
        variant: 'contained',
        label: 'Manual Order',
        imageProps: {
          src: ManualOrderIcon,
          alt: 'Manual Order Icon'
        }
      }
    },
    listUtilProps: {
      headingTypographyProps: {
        variant: 'subtitle1',
        paragraph: false,
        content: 'Candidate Information'
      },
      searchFieldProps: {
        autoFocus: false,
        placeholder: ' Search any candidate'
      },
      filterButtonProps: {
        variant: 'outlined',

        imageProps: {
          src: FilterSVG,
          alt: 'Filter SVG'
        }
      },
      moreButtonProps: {
        variant: 'outlined',

        imageProps: {
          src: MoreSVG,
          alt: 'More SVG'
        }
      }
    }
  };

  test('renders Candidates component with the required molecules and atoms', async () => {
    const { container } = render(<Candidates {...defaultProps} />);

    expect(screen.queryByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Export Icon' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Manual Order Icon' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Filter SVG' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'More SVG' })).toBeInTheDocument();
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    const buttonElements = container.querySelectorAll('.MuiPaginationItem-root');
    expect(buttonElements).toHaveLength(2);
    // const comboBox = screen.getByRole('combobox');
    // await act(() => {
    //   userEvent.click(comboBox);
    // });
    // expect(screen.queryAllByRole('menuitem')).toHaveLength(3);
  });

  test('renders the Candidate list', async () => {
    await act(async () => render(<Candidates {...defaultProps} />));
    const items = await screen.findAllByTestId('candidate-item');

    expect(items).toHaveLength(2);
  });

  test('shows alert popup message when the API call fails', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));
    const mockAlert = jest.fn();
    window.alert = mockAlert;
    render(<Candidates {...defaultProps} />);
    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledTimes(1);
    });

    expect(mockAlert).toHaveBeenCalledTimes(1);
  });

  test('displays candidate full details when the user click on a candidate record', async () => {
    await act(async () => render(<Candidates {...defaultProps} />));
    // await waitFor(() => {
    //   expect(axios.get).toHaveBeenCalled();
    // });
    expect(axios.get).toHaveBeenCalled();
    const items = await screen.findAllByTestId('candidate-item');

    expect(items).toHaveLength(2);
    const johnRecord = screen.getByText('John');
    await userEvent.click(johnRecord);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  test('fetches the candidate data based on filter applied', async () => {
    await act(async () => render(<Candidates {...defaultProps} />));
    const filterButton = screen.getByRole('button', { name: 'Filter SVG' });
    await userEvent.click(filterButton);
    const statusClear = screen.getByRole('checkbox', { name: 'Clear' });
    await userEvent.click(statusClear);
    const statusConsider = screen.getByRole('checkbox', { name: 'Consider' });
    await userEvent.click(statusConsider);
    const adjudicationEngage = screen.getByRole('checkbox', { name: 'Engaged' });
    await userEvent.click(adjudicationEngage);
    const adjudicationAction = screen.getByRole('checkbox', { name: 'Pre adverse action' });
    await userEvent.click(adjudicationAction);
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining('status=CLEAR&status=CONSIDER&adjudication=ENGAGE')
    );
    const items = await screen.findAllByTestId('candidate-item');
    expect(items).toHaveLength(2);
  });

  test('fetches the candidate data based on search functionality', async () => {
    await act(async () => render(<Candidates {...defaultProps} />));
    const searchField = screen.getByRole('textbox');
    await userEvent.type(searchField, 'John');
    await waitFor(
      () => {
        expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('name=John'));
      },
      { timeout: 4000 }
    );
  });
});
