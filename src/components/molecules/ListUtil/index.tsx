import { styled } from '@mui/material';
import TextField, { CustomTextFieldProps } from '../../atoms/TextField';
import Typography, { CustomTypographyProps } from '../../atoms/Typography';
import Button, { CustomButtonProps } from '../../atoms/Button';
import { theme } from '../../../themes';

const StyledDiv = styled('div')(() => ({
  height: '36px',
  //width: '1056px',
  //backgroundColor: 'blue',
  display: 'flex',
  gap: '16px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box'
}));

const stylingObjects = {
  typographyStyling: {
    ...theme.typography.subtitle1,
    color: theme.palette.textColor.highEmphasis
  }
};

const StyledButton = styled(Button)(() => ({
  borderColor: theme.palette.structuralColor.stroke,
  borderWidth: 1
}));

const StyledTextField = styled(TextField)(() => ({
  height: '36px', // Width of the outer container
  '& .MuiOutlinedInput-root': {
    height: '36px', // Height of the input field
    '& fieldset': {
      borderColor: `1px solid ${theme.palette.structuralColor.stroke}`
    }
  }
}));

export interface ListUtilProps {
  headingTypographyProps?: CustomTypographyProps;
  searchFieldProps?: CustomTextFieldProps;
  filterButtonProps?: CustomButtonProps;
  moreButtonProps?: CustomButtonProps;
}

const ListUtilComponent = (props: ListUtilProps) => {
  return (
    <StyledDiv>
      <Typography {...props.headingTypographyProps} sx={stylingObjects.typographyStyling} />
      <StyledDiv>
        <StyledTextField {...props.searchFieldProps} />
        <StyledButton {...props.filterButtonProps} />
        <StyledButton {...props.moreButtonProps} />
      </StyledDiv>
    </StyledDiv>
  );
};

export default ListUtilComponent;
