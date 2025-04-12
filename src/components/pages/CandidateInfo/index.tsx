import CandidateInfo from '../../organisms/CandidateInfo';
import BackIcon from '../../../assets/svgs/Back.svg';
import { useNavigate } from 'react-router-dom';

const CandidateInfoPage = () => {
  const navigate = useNavigate();
  return (
    <CandidateInfo
      headerProps={{
        imageProps: {
          src: BackIcon,
          alt: 'Back Icon',
          onClick: () => {
            navigate('/candidates');
          }
        },
        headingProps: {
          variant: 'h1',
          paragraph: false,
          content: ''
        },
        outlinedButtonProps: {
          variant: 'outlined',
          label: 'Pre-Adverse Action'
        },
        containedButtonProps: {
          variant: 'contained',
          label: 'Engage'
        }
      }}
    />
  );
};
export default CandidateInfoPage;
