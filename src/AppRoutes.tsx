import { Routes, Route, useNavigate } from 'react-router-dom';
import Candidates from './components/organisms/Candidates';
import FilterSVG from './assets/svgs/Filter.svg';
import MoreSVG from './assets/svgs/More.svg';
import ExportIcon from './assets/svgs/export.svg';
import ManualOrderIcon from './assets/svgs/manual_order.svg';
import CandidateInfoComponent from './components/organisms/CandidateInfo';
import Mail from '../src/components/organisms/Mail';
import BackIcon from './assets/svgs/prev_screen.svg';

const AppRoutes = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/candidates"
        element={
          <Candidates
            {...{
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
                  placeholder: ' Search any candidate',
                  variant: 'outlined'
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
            }}
          />
        }
      />
      <Route path="/adverse-actions" element={<AdverseActions />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/account" element={<Account />} />
      <Route path="/screenings" element={<Screenings />} />
      <Route
        path="/candidates/:candId/pre-adverse-action"
        element={
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
        }
      />
      <Route
        path="/candidates/:id"
        element={
          <CandidateInfoComponent
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
        }
      />
    </Routes>
  );
};

const Home = () => <h2>Home</h2>;
const AdverseActions = () => <h2>Adverse Actions</h2>;
const Logs = () => <h2>Logs</h2>;
const Analytics = () => <h2>Analytics</h2>;
const Account = () => <h2>Account</h2>;
const Screenings = () => <h2>Screenings</h2>;

export default AppRoutes;
