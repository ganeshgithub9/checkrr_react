import { styled, TextField, StandardTextFieldProps } from '@mui/material';
import React from 'react';

const StyledTextField = styled(TextField)(() => ({
  boxSizing: 'border-box'
}));

export interface CustomTextFieldProps extends StandardTextFieldProps {
  // inherits from InputBaseComponentProps
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const TextFieldComponent = (props: CustomTextFieldProps) => {
  return <StyledTextField {...props} />;
};

export default TextFieldComponent;
