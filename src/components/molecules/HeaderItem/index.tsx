import { styled } from '@mui/material';
import Image, { ImageProps } from '../../atoms/Image';
import Typography, { CustomTypographyProps } from '../../atoms/Typography';
import Button, { CustomButtonProps } from '../../atoms/Button';
import { theme } from '../../../themes';

const StyledDiv = styled('div')(() => ({
  height: '36px',
  //width: '1056px',
  display: 'flex',
  gap: '20px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

const StyledHeadingTypography = styled(Typography)(() => ({
  ...theme.typography.h1,
  color: theme.palette.textColor.highEmphasis
}));

export interface HeaderItemProps {
  imageProps?: ImageProps;
  headingProps?: CustomTypographyProps;
  outlinedButtonProps?: CustomButtonProps;
  containedButtonProps?: CustomButtonProps;
}

const HeaderItemComponent = (props: HeaderItemProps) => {
  return (
    <StyledDiv>
      <StyledDiv>
        {props.imageProps ? <Image {...props.imageProps} width={'18px'} height={'18px'} /> : null}
        <StyledHeadingTypography {...props.headingProps} />
      </StyledDiv>
      <StyledDiv>
        {props.outlinedButtonProps ? <Button {...props.outlinedButtonProps} /> : null}
        {props.containedButtonProps ? <Button {...props.containedButtonProps} /> : null}
      </StyledDiv>
    </StyledDiv>
  );
};

export default HeaderItemComponent;
