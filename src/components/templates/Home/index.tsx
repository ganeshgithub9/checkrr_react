import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarComponent from '../../organisms/Sidebar';
import { theme } from '../../../themes';

export interface HomeTemplateProps {
  main: ReactNode;
}

const stylingObjects = {
  outerBoxStyling: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '10px',
    backgroundColor: theme.palette.primaryColor.primary100
  }
};
const HomeTemplate = () => {
  return (
    <Box sx={stylingObjects.outerBoxStyling}>
      <div
        style={{
          width: '238px',
          height: '720px',
          borderRadius: '8px',
          backgroundColor: theme.palette.structuralColor.white,
          margin: '20px',
          boxShadow: '0px 4px 28px 0px #2D2D2F19'
        }}>
        <SidebarComponent />
      </div>
      <div style={{ width: '1070px', height: '720px', marginTop: '5px' }}>
        <Outlet />
      </div>
    </Box>
  );
};
export default HomeTemplate;
