import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarComponent from 'src/components/organisms/Sidebar';

export interface HomeTemplateProps {
  main: ReactNode;
}

const stylingObjects = {
  outerBoxStyling: {
    width: '100%',
    height: '720px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '10px'
  }
};
const HomeTemplate = () => {
  return (
    <Box sx={stylingObjects.outerBoxStyling}>
      <div style={{ width: '238px', height: '100%' }}>
        <SidebarComponent />
      </div>
      <div style={{ width: '1056px', height: '100%' }}>
        <Outlet />
      </div>
    </Box>
  );
};
export default HomeTemplate;
