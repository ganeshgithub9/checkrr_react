import Box, { BoxProps } from '@mui/material/Box';
import Image, { ImageProps } from '../../atoms/Image';
import Typography, { CustomTypographyProps } from '../../atoms/Typography';

export interface MailSuccessItemProps {
  boxProps: BoxProps;
  imageProps: ImageProps;
  messageProps: CustomTypographyProps;
}

const MailSuccessItemComponent = (props: MailSuccessItemProps) => {
  return (
    <Box {...props.boxProps}>
      <Image {...props.imageProps} width={'200px'} height={'200px'} />
      <Typography {...props.messageProps} />
    </Box>
  );
};

export default MailSuccessItemComponent;
