import { Box } from '@mui/material';
import { ReactNode } from 'react';

export interface HomeTemplateProps {
  sideBar: ReactNode;
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
const HomeTemplate = (props: HomeTemplateProps) => {
  return (
    <Box sx={stylingObjects.outerBoxStyling}>
      <div style={{ width: '238px', height: '100%' }}>{props.sideBar}</div>
      <div style={{ width: '1056px', height: '100%' }}>{props.main}</div>
    </Box>
  );
};
export default HomeTemplate;
