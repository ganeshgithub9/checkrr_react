import {
  Stack,
  Box,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
  Typography
} from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import HeaderItem, { HeaderItemProps } from '../../molecules/HeaderItem';
import Button from '../../atoms/Button';
import { theme } from '../../../themes';
import {
  buttonObjects,
  candidateGeneralInfo,
  candidateReportInfo,
  courtSearchTableHeaders,
  arrowIcons
} from '../../constants/objects';

import CandidateOrReportInfo from '../../molecules/CandidateOrReportInfo';
// import UserSVG from '../../../assets/svgs/user.svg';
// import EmailSVG from '../../../assets/svgs/Email.svg';
// import NameSVG from '../../../assets/svgs/Name.svg';
// import PhoneSVG from '../../../assets/svgs/Phone.svg';
// import LocationSVG from '../../../assets/svgs/Location.svg';
// import SecuritySVG from '../../../assets/svgs/Security.svg';
// import CalendarSVG from '../../../assets/svgs/Calendar.svg';
// import ClearSVG from '../../../assets/svgs/Clear.svg';
// import AdverseActionSVG from '../../../assets/svgs/adverse_actions.svg';
// import PackageSVG from '../../../assets/svgs/Package.svg';
// import Calendar1SVG from '../../../assets/svgs/Calendar-1.svg';
// import ClockSVG from '../../../assets/svgs/Clock.svg';
import Chip from '../../atoms/Chip';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export interface CandidateInfoProps {
  headerProps: HeaderItemProps;
}

export interface CandidateGenearalInfoProps {
  id?: string;
  name?: string;
  email?: string;
  dob?: string;
  phone?: string;
  zipcode?: string;
  socialSecurity?: string;
  driversLicense?: string;
  createdAt?: string;
  [key: string]: any;
}

interface CandidateReportInfoProps {
  id?: string;
  status?: string;
  adjudicaion?: string;
  package?: string;
  createdAt?: string;
  completedDate?: string;
  turnAroundTime?: string;
  [key: string]: any;
}

interface CourtSearchInfoProps {
  id?: string;
  search?: string;
  status?: string;
  date?: string;
  [key: string]: any;
}

interface CourtSearchDBProps {
  id?: string;
  list?: CourtSearchInfoProps[];
}

const stylingObjects = {
  buttonStyling: {
    display: 'flex',
    justifyContent: 'space-between',
    ...theme.typography.subtitle1,
    color: theme.palette.textColor.highEmphasis
  },

  boxStyling: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'flex-start'
  }
};

const conditionalComponents = [
  (candidateInfo: any): ReactNode => (
    <Box sx={stylingObjects.boxStyling}>
      {candidateGeneralInfo.map((candidateInf) => {
        candidateInf.valueTypographyProps.content = candidateInfo[candidateInf.id];
        return <CandidateOrReportInfo {...candidateInf} key={candidateInf.id} />;
      })}
    </Box>
  ),
  (reportInfo: any): ReactNode => (
    <Box sx={stylingObjects.boxStyling}>
      {candidateReportInfo.map((reportInf) => {
        reportInf.valueTypographyProps.content = reportInfo[reportInf.id];
        return <CandidateOrReportInfo {...reportInf} key={reportInf.id} />;
      })}
    </Box>
  ),
  (courtSearches: any): ReactNode => (
    <Table>
      <TableHead>
        <TableRow>
          {courtSearchTableHeaders.map((header) => (
            <TableCell key={header}>
              <Typography sx={theme.typography.caption1 || {}}>{header}</Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {courtSearches?.list?.map((record: CourtSearchInfoProps) => (
          <TableRow key={record.id}>
            <TableCell>
              <Typography sx={theme.typography.body2 || {}}>{record.search}</Typography>
            </TableCell>
            <TableCell>
              <Chip label={record.status} variant="filled" />
            </TableCell>
            <TableCell>
              <Typography sx={theme.typography.body2 || {}}>{record.date}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
];

const CandidateInfoComponent = (props: CandidateInfoProps) => {
  const [isButtonOpen, openButton] = useState<boolean[]>([false, false, false]);
  const [currentIcons, toggleIcon] = useState<number[]>([0, 0, 0]);
  const [candidateInfo, setCandidateInfo] = useState<CandidateGenearalInfoProps>({});
  const [reportInfo, setReportInfo] = useState<CandidateReportInfoProps>({});
  const [courtSearchInfo, setCourtSearchInfo] = useState<CourtSearchDBProps>(
    {} as CourtSearchDBProps
  );
  const [candidateName, setCandidateName] = useState<string>('');
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    const updatedButtonOpen = [...isButtonOpen];
    updatedButtonOpen[index] = !updatedButtonOpen[index];
    openButton(updatedButtonOpen);

    const updatedIcons = [...currentIcons];
    updatedIcons[index] = currentIcons[index] ^ 1;
    toggleIcon(updatedIcons);
  };

  if (props.headerProps.outlinedButtonProps) {
    props.headerProps.outlinedButtonProps.onClick = () => {
      navigate(`/candidates/${id}/pre-adverse-action`);
    };
  }
  if (props.headerProps.headingProps) {
    props.headerProps.headingProps.content = candidateName;
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/candidate-info/${id}`)
      .then((res) => {
        setCandidateInfo(res.data);
        setCandidateName(res.data.name);
      })
      .catch((err) => alert(err));

    axios
      .get(`http://localhost:3000/report-info/${id}`)
      .then((res) => setReportInfo(res.data))
      .catch((err) => alert(err));

    axios
      .get(`http://localhost:3000/candidate-courtsearches/${id}`)
      .then((res) => setCourtSearchInfo(res.data))
      .catch((err) => alert(err));
  }, [id]);

  return (
    <Stack spacing={5}>
      <HeaderItem {...props.headerProps} />
      {buttonObjects.map((buttonData, index) => {
        let param = candidateInfo;
        if (index === 1) {
          param = reportInfo;
        } else if (index === 2) {
          param = courtSearchInfo;
        }

        return (
          <>
            <Button
              {...buttonData}
              endIcon={arrowIcons[currentIcons[index]]}
              sx={{ ...stylingObjects.buttonStyling, textTransform: 'capitalize' }}
              onClick={() => handleClick(index)}
              key={buttonData.label}
            />
            {isButtonOpen[index] ? conditionalComponents[index](param) : null}
          </>
        );
      })}
    </Stack>
  );
};

export default CandidateInfoComponent;
