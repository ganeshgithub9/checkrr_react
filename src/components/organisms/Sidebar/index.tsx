import { Link } from 'react-router-dom';
import { useState } from 'react';
import { List, ListItem, Box } from '@mui/material';
import Image, { ImageProps } from '../../atoms/Image';
import CandidatesSVG from '../../../assets/svgs/candidates.svg';
import HomeSVG from '../../../assets/svgs/home.svg';
import AdverseActionsSVG from '../../../assets/svgs/adverse_actions.svg';
import LogsSVG from '../../../assets/svgs/logs.svg';
import AnalyticsSVG from '../../../assets/svgs/analytics.svg';
import AccountSVG from '../../../assets/svgs/account.svg';
import ScreeningsSVG from '../../../assets/svgs/screenings.svg';
import NavBarItem, { NavBarItemProps } from '../../molecules/NavBarItem';
import ProfileItem, { ProfileItemProps } from '../../molecules/ProfileItem';
import RecruitImage from '../../../assets/images/recruit.png';
import SampleAvatar from '../../../assets/images/profile.png';
import LogOutSVG from '../../../assets/svgs/logout.svg';
import { theme } from '../../../themes';

const stylingObjects = {
  outerBoxStyling: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    height: '720px',
    width: '238px',
    borderRadius: '6px',
    borderColor: theme.palette.structuralColor.white
  },
  listStyling: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    gap: '16px'
  }
};

const imageProps: ImageProps = {
  src: RecruitImage,
  alt: 'Recruit Image'
};

const navigationObjects: (NavBarItemProps & { to: string })[] = [
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

const profileItemProps: ProfileItemProps = {
  avatarProps: {
    src: SampleAvatar,
    alt: 'CheckrrAvatar',
    size: '36px'
  },
  nameTypographyProps: {
    variant: 'body1',
    paragraph: false,
    content: 'John Wesley'
  },
  mailTypographyProps: {
    variant: 'caption',
    paragraph: false,
    content: 'jw@abc.com'
  },
  logOutImageprops: {
    src: LogOutSVG,
    alt: 'Logout SVG'
  }
};

const SidebarComponent = () => {
  const [selectedNav, setNav] = useState('/');

  return (
    <Box sx={stylingObjects.outerBoxStyling}>
      <List sx={stylingObjects.listStyling}>
        <ListItem sx={{ height: '44px' }}>
          <Image {...imageProps} width={'78px'} height={'20px'} />
        </ListItem>
      </List>
      <nav>
        <List sx={stylingObjects.listStyling}>
          {navigationObjects.map((navBarItemProps) => (
            <ListItem
              component={Link}
              to={navBarItemProps.to}
              onClick={() => setNav(navBarItemProps.to)}
              key={navBarItemProps.to}
              sx={{
                height: '44px',
                borderRadius: '8px',
                borderColor: theme.palette.structuralColor.white,
                borderStyle: 'solid',
                backgroundColor:
                  selectedNav === navBarItemProps.to
                    ? theme.palette.primaryColor.primary300
                    : 'transparent'
              }}>
              <NavBarItem {...navBarItemProps} />
            </ListItem>
          ))}
        </List>
      </nav>
      <ProfileItem {...profileItemProps} />
    </Box>
  );
};

export default SidebarComponent;
