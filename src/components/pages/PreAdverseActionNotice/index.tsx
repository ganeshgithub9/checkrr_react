import HomeLayout, { HomeTemplateProps } from '../../templates/Home';
import Sidebar from '../../organisms/Sidebar';
import Mail from '../../organisms/Mail';

import BackIcon from '../../../assets/svgs/Back.svg';

const HomeLayoutProps: HomeTemplateProps = {
  sideBar: <Sidebar />,
  main: (
    <Mail
      {...{
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
      }}
    />
  )
};

const PreAdverseActionNoticePage = () => {
  return <HomeLayout {...HomeLayoutProps} />;
};
export default PreAdverseActionNoticePage;
