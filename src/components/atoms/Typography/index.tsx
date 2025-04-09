import { Typography, TypographyProps } from '@mui/material';

export interface CustomTypographyProps extends TypographyProps {
  content?: string;
}

const TypographyComponent = (props: CustomTypographyProps) => {
  return <Typography {...props}>{props.content}</Typography>;
};

export default TypographyComponent;
