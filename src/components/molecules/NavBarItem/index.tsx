import { Box } from '@mui/material';
import Image, { ImageProps } from '../../atoms/Image';
import Typography, { CustomTypographyProps } from '../../atoms/Typography';
import { theme } from '../../../themes';

const stylingObjects = {
  body1TypographyStyling: {
    ...theme.typography.body1,
    color: theme.palette.textColor.highEmphasis
  }
};

export interface NavBarItemProps {
  imageProps: ImageProps;
  typographyProps: CustomTypographyProps;
}

const NavBarItemComponent = (props: NavBarItemProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Image {...props.imageProps} height={'18px'} width={'18px'} />
      <Typography {...props.typographyProps} sx={stylingObjects.body1TypographyStyling} />
    </Box>
  );
};

export default NavBarItemComponent;
