import { ReactNode } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { CustomButtonProps } from '../atoms/Button';
import UserSVG from '../../assets/svgs/user.svg';
import EmailSVG from '../../assets/svgs/Email.svg';
import NameSVG from '../../assets/svgs/Name.svg';
import PhoneSVG from '../../assets/svgs/Phone.svg';
import LocationSVG from '../../assets/svgs/Location.svg';
import SecuritySVG from '../../assets/svgs/Security.svg';
import CalendarSVG from '../../assets/svgs/Calendar.svg';
import ClearSVG from '../../assets/svgs/Clear.svg';
import AdverseActionsSVG from '../../assets/svgs/adverse_actions.svg';
import PackageSVG from '../../assets/svgs/Package.svg';
import Calendar1SVG from '../../assets/svgs/Calendar-1.svg';
import ClockSVG from '../../assets/svgs/Clock.svg';
import { CandidateOrReportInfoProps } from '../molecules/CandidateOrReportInfo';
import { PagingItemProps } from '../molecules/PagingItem';
import CandidatesSVG from '../../assets/svgs/candidates.svg';
import HomeSVG from '../../assets/svgs/home.svg';
import LogsSVG from '../../assets/svgs/logs.svg';
import AnalyticsSVG from '../../assets/svgs/analytics.svg';
import AccountSVG from '../../assets/svgs/account.svg';
import ScreeningsSVG from '../../assets/svgs/screenings.svg';
import { NavBarItemProps } from '../molecules/NavBarItem';
import RecruitImage from '../../assets/images/recruit.png';
import { ImageProps } from '../atoms/Image';

interface CandidateOrReportInfoIDProps extends CandidateOrReportInfoProps {
  id: string;
  [key: string]: any;
}

export interface CheckboxLabelsProps {
  id: string;
  label: string;
}

export const buttonObjects: CustomButtonProps[] = [
  {
    variant: 'outlined',
    label: 'Candidate Information',
    endIcon: <KeyboardArrowDown />
  },
  {
    variant: 'outlined',
    label: 'Report Information',
    endIcon: <KeyboardArrowDown />
  },
  {
    variant: 'outlined',
    label: 'Court Searches',
    endIcon: <KeyboardArrowDown />
  }
];

export const imagePropsObject: ImageProps = {
  src: RecruitImage,
  alt: 'Recruit Image'
};

export const courtSearchTableHeaders = ['Search', 'Status', 'Date'];
export const arrowIcons: ReactNode[] = [
  <KeyboardArrowDown key={'kd'} />,
  <KeyboardArrowUp key={'ku'} />
];

export const candidateTableHeaders = ['NAME', 'ADJUDICATION', 'STATUS', 'LOCATION', 'DATE'];

export const pagingItemPropsObject: PagingItemProps = {
  pagingTypographyProps: {
    variant: 'body1',
    content: ''
  },
  dropdownProps: {
    inputLabelProps: {
      //label: '10 per page'
    },
    selectProps: {
      sx: {
        width: 150,
        height: 26
      },
      value: 10
      //label: '10 per page'
    },
    menuItems: [
      { value: 10, label: '10 per page' },
      { value: 20, label: '20 per page' },
      { value: 30, label: '30 per page' }
    ]
  },
  paginationProps: {
    count: 3,
    shape: 'rounded'
  }
};

export const checkboxLabels: CheckboxLabelsProps[] = [
  { id: 'driving', label: 'Driving while license suspended' },
  { id: 'assault', label: 'Assault Domestic Violence' },
  { id: 'employment', label: 'Unable to verify employment history' }
];

export const statusFilterCheckboxLabels: CheckboxLabelsProps[] = [
  { id: 'All Status', label: 'All Status' },
  { id: 'Clear', label: 'Clear' },
  { id: 'Consider', label: 'Consider' }
];

export const adjudicationFilterCheckboxLabels: CheckboxLabelsProps[] = [
  { id: 'All Adjudication', label: 'All' },
  { id: 'Engaged', label: 'Engaged' },
  { id: 'Pre adverse action', label: 'Pre adverse action' }
];

export const navigationObjects: (NavBarItemProps & { to: string })[] = [
  {
    to: '/',
    imageProps: {
      src: HomeSVG,
      alt: 'Home SVG'
    },
    typographyProps: {
      variant: 'body1',
      content: 'Home'
    }
  },
  {
    to: '/candidates',
    imageProps: {
      src: CandidatesSVG,
      alt: 'Candidates SVG'
    },
    typographyProps: {
      variant: 'body1',
      content: 'Candidates'
    }
  },
  {
    to: '/adverse-actions',
    imageProps: {
      src: AdverseActionsSVG,
      alt: 'Adverse Actions SVG'
    },
    typographyProps: {
      variant: 'body1',
      content: 'Adverse Actions'
    }
  },
  {
    to: '/logs',
    imageProps: {
      src: LogsSVG,
      alt: 'Logs SVG'
    },
    typographyProps: {
      variant: 'body1',
      content: 'Logs'
    }
  },
  {
    to: '/analytics',
    imageProps: {
      src: AnalyticsSVG,
      alt: 'Analytics SVG'
    },
    typographyProps: {
      variant: 'body1',
      content: 'Analytics'
    }
  },
  {
    to: '/account',
    imageProps: {
      src: AccountSVG,
      alt: 'Account SVG'
    },
    typographyProps: {
      variant: 'body1',
      content: 'Account'
    }
  },
  {
    to: '/screenings',
    imageProps: {
      src: ScreeningsSVG,
      alt: 'Screenings SVG'
    },
    typographyProps: {
      variant: 'body1',
      content: 'Screenings'
    }
  }
];

export const candidateGeneralInfo: CandidateOrReportInfoIDProps[] = [
  {
    id: 'name',
    imageProps: {
      src: UserSVG,
      alt: 'User SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Name'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'email',
    imageProps: {
      src: EmailSVG,
      alt: 'Email SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Email'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'dob',
    imageProps: {
      src: NameSVG,
      alt: 'Name SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'DOB'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'phone',
    imageProps: {
      src: PhoneSVG,
      alt: 'Phone SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Phone'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'zipcode',
    imageProps: {
      src: LocationSVG,
      alt: 'Location SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Zipcode'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'socialSecurity',
    imageProps: {
      src: SecuritySVG,
      alt: 'Security SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Social Security'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'driversLicense',
    imageProps: {
      src: NameSVG,
      alt: 'Name SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Drivers License'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'createdAt',
    imageProps: {
      src: CalendarSVG,
      alt: 'Calendar SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Created At'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  }
];

export const candidateReportInfo: CandidateOrReportInfoIDProps[] = [
  {
    id: 'status',
    imageProps: {
      src: ClearSVG,
      alt: 'Clear SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Status'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'adjudication',
    imageProps: {
      src: AdverseActionsSVG,
      alt: 'Adverse Action SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Adjudication'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'package',
    imageProps: {
      src: PackageSVG,
      alt: 'Package SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Package'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'createdAt',
    imageProps: {
      src: CalendarSVG,
      alt: 'Calendar SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Created At'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'completedDate',
    imageProps: {
      src: Calendar1SVG,
      alt: 'Calendar1 SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Completed Date'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  },
  {
    id: 'turnAroundTime',
    imageProps: {
      src: ClockSVG,
      alt: 'Clock SVG'
    },
    keyTypographyProps: {
      variant: 'body1',
      paragraph: false,
      content: 'Turn Around Time'
    },
    valueTypographyProps: {
      variant: 'body1',
      content: ''
    }
  }
];
