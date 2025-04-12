import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

//import CandidateInfo, { CandidateInfoProps } from '../../organisms/CandidateInfo';
import CandidateInfoPage from '.';
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

describe('CandidateInfo component', () => {
  const mockBackClick = jest.fn(),
    mockEngageClick = jest.fn();
  //   const defaultProps: CandidateInfoProps = {
  //     headerProps: {
  //       imageProps: {
  //         src: BackIcon,
  //         alt: 'Back Icon',
  //         onClick: mockBackClick
  //       },
  //       headingProps: {
  //         variant: 'h1',
  //         paragraph: false,
  //         content: 'John Smith'
  //       },
  //       outlinedButtonProps: {
  //         variant: 'outlined',
  //         label: 'Pre-Adverse Action'
  //       },
  //       containedButtonProps: {
  //         variant: 'contained',
  //         label: 'Engage',
  //         onClick: mockEngageClick
  //       }
  //     }
  //   };

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

    // const backIcon = screen.getByRole('img', { name: 'Back Icon' });
    // fireEvent.click(backIcon);
    // expect(mockBackClick).toHaveBeenCalledTimes(1);
    const adverseActionButton = screen.getByRole('button', { name: 'Pre-Adverse Action' });
    fireEvent.click(adverseActionButton);
    expect(mockNavigate).toHaveBeenCalledWith('/candidates/1/pre-adverse-action');
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    // const engageButton = screen.getByRole('button', { name: 'Engage' });
    // fireEvent.click(engageButton);
    // expect(mockEngageClick).toHaveBeenCalledTimes(1);
    const candidateInfoButton = screen.getByRole('button', { name: 'Candidate Information' });
    fireEvent.click(candidateInfoButton);
    expect(screen.queryByText(/name/i)).toBeInTheDocument();
  });
});
