import HomeLayout, { HomeTemplateProps } from '../../templates/Home';
import Sidebar from '../../organisms/Sidebar';
import CandidateInfo from '../../organisms/CandidateInfo';
import BackIcon from '../../../assets/svgs/Back.svg';

const HomeLayoutProps: HomeTemplateProps = {
  sideBar: <Sidebar />,
  main: (
    <CandidateInfo
      headerProps={{
        imageProps: {
          src: BackIcon,
          alt: 'Back Icon'
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
          label: 'Engage'
        }
      }}
    />
  )
};

const CandidateInfoPage = () => {
  return <HomeLayout {...HomeLayoutProps} />;
};
export default CandidateInfoPage;
