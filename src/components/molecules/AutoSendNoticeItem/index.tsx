import { styled } from '@mui/material';
import Typography, { CustomTypographyProps } from '../../atoms/Typography';
import Button, { CustomButtonProps } from '../../atoms/Button';
import TextField, { CustomTextFieldProps } from '../../atoms/TextField';
import { theme } from '../../../themes';

const stylingObjects = {
  typographyStyling: {
    ...theme.typography.body2,
    color: theme.palette.textColor.mediumEmphasis
  }
};

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  height: '36px',
  gap: '10px'

  //width: '238px',
  //width: '100%',
  //backgroundColor: 'blue',
}));
const StyledOuterDiv = styled('div')(() => ({
  //width: '116 px',
  height: '36px',
  display: 'flex',
  justifyContent: 'space-between'
}));

const StyledTextField = styled(TextField)(() => ({
  width: '50px',
  height: '36px', // Width of the outer container
  '& .MuiOutlinedInput-root': {
    height: '36px', // Height of the input field
    '& fieldset': {
      borderRadius: '8px',
      borderColor: `1px solid ${theme.palette.structuralColor.stroke}`
    }
  }
}));

export interface AutoSendNoticeItemProps {
  autoSend1TypographyProps: CustomTypographyProps;
  daysTextFieldProps: CustomTextFieldProps;
  autoSend2TypographyProps: CustomTypographyProps;
  noticeButtonProps: CustomButtonProps;
}

const AutoSendNoticeItemComponent = (props: AutoSendNoticeItemProps) => {
  return (
    <StyledOuterDiv>
      <StyledDiv>
        <Typography {...props.autoSend1TypographyProps} sx={stylingObjects.typographyStyling} />
        <StyledTextField {...props.daysTextFieldProps} />
        <Typography {...props.autoSend2TypographyProps} sx={stylingObjects.typographyStyling} />
      </StyledDiv>
      <Button {...props.noticeButtonProps} />
    </StyledOuterDiv>
  );
};

export default AutoSendNoticeItemComponent;
