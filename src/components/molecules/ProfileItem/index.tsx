import { styled } from '@mui/material';
import Avatar, { CustomAvatarProps } from '../../atoms/Avatar';
import Typography, { CustomTypographyProps } from '../../atoms/Typography';
import Image, { ImageProps } from '../../atoms/Image';
import { theme } from '../../../themes';

const StyledImage = styled(Image)(() => ({
  height: '18px',
  width: '18px'
}));

const StyledMailTypography = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '18px',
  color: theme.palette.textColor.lowEmphasis
}));

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  height: '38px',
  //width: '238px',
  width: '100%',
  //backgroundColor: 'blue',
  gap: '20px',
  padding: '10px'
}));

const StyledNameMailDiv = styled('div')(() => ({
  width: '116 px',
  height: '38 px',
  display: 'flex',
  flexDirection: 'column'
}));

export interface ProfileItemProps {
  avatarProps: CustomAvatarProps;
  nameTypographyProps: CustomTypographyProps;
  mailTypographyProps: CustomTypographyProps;
  logOutImageprops: ImageProps;
}

const ProfileItemComponent = (props: ProfileItemProps) => {
  return (
    <StyledDiv>
      <Avatar {...props.avatarProps} />
      <StyledNameMailDiv>
        <Typography
          {...props.nameTypographyProps}
          sx={{ ...theme.typography.body1, color: theme.palette.textColor.highEmphasis }}
        />
        <StyledMailTypography {...props.mailTypographyProps} />
      </StyledNameMailDiv>
      <StyledImage {...props.logOutImageprops} />
    </StyledDiv>
  );
};

export default ProfileItemComponent;
