import { Button, ButtonProps, styled, Box } from '@mui/material';
import Image, { ImageProps } from '../Image';

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  gap: '4px'
}));

export interface CustomButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  label?: string;
  imageProps?: ImageProps;
}

const ButtonComponent = (props: CustomButtonProps) => {
  return (
    <Button {...props}>
      <StyledBox>
        <Image {...props.imageProps} />
        {props.label}
      </StyledBox>
    </Button>
  );
};

export default ButtonComponent;
