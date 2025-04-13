import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import axios from 'axios';
//import Candidates, { CandidatesProps } from '../../organisms/Candidates';
import CandidatesPage from '.';
import { describe, test, expect } from '@jest/globals';
import FilterSVG from '../../../assets/svgs/filter.svg';
import MoreSVG from '../../../assets/svgs/More.svg';
import ExportIcon from '../../../assets/svgs/export.svg';
import ManualOrderIcon from '../../../assets/svgs/manual_order.svg';

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

describe('Candidates component', () => {
  test('renders Candidates component with the required molecules and atoms', async () => {
    const { container } = render(<CandidatesPage />);

    expect(screen.queryByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Export Icon' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Manual Order Icon' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Filter SVG' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'More SVG' })).toBeInTheDocument();
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    const buttonElements = container.querySelectorAll('.MuiPaginationItem-root');
    expect(buttonElements).toHaveLength(5);
    const comboBox = screen.getByRole('combobox');
    await userEvent.click(comboBox);
    expect(screen.queryAllByRole('menuitem')).toHaveLength(3);
  });

  test('renders the Candidate list', async () => {
    render(<CandidatesPage />);
    const items = await screen.findAllByTestId('candidate-item');

    expect(items).toHaveLength(2);
  });
});
