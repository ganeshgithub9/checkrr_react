import { useNavigate } from 'react-router-dom';
import Mail from '../../organisms/Mail';

import BackIcon from '../../../assets/svgs/Back.svg';

const PreAdverseActionNoticePage = () => {
  const navigate = useNavigate();
  return (
    <Mail
      headerProps={{
        imageProps: {
          src: BackIcon,
          alt: 'Back Icon',
          onClick: () => {
            navigate(-1);
          }
        },
        headingProps: {
          variant: 'h1',
          paragraph: false,
          content: 'Pre-Adverse action notice'
        }
      }}
      autoSendNoticeItemProps={{
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
      }}
    />
  );
};
export default PreAdverseActionNoticePage;
