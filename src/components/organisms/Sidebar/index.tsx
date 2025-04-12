import { Link } from 'react-router-dom';
import { useState } from 'react';
import { List, ListItem, Box } from '@mui/material';
import Image from '../../atoms/Image';
import { imagePropsObject, navigationObjects } from '../../constants/objects';
import NavBarItem from '../../molecules/NavBarItem';
import ProfileItem, { ProfileItemProps } from '../../molecules/ProfileItem';
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
  const [selectedNav, setSelectedNav] = useState('/');

  return (
    <Box sx={stylingObjects.outerBoxStyling}>
      <List sx={stylingObjects.listStyling}>
        <ListItem sx={{ height: '44px' }}>
          <Image {...imagePropsObject} width={'78px'} height={'20px'} />
        </ListItem>
      </List>
      <nav>
        <List sx={stylingObjects.listStyling}>
          {navigationObjects.map((navBarItemProps) => (
            <ListItem
              component={Link}
              to={navBarItemProps.to}
              onClick={() => setSelectedNav(navBarItemProps.to)}
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
