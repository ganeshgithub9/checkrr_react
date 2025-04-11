import { styled, TextField, TextFieldVariants, TextFieldProps } from '@mui/material';
import { ChangeEventHandler } from 'react';

const StyledTextField = styled(TextField)(() => ({
  // height: '10px',
  // backgroundColor: 'red'
  boxSizing: 'border-box'
}));

export type CustomTextFieldProps =
  | TextFieldProps<'filled'>
  | (
      | TextFieldProps<'outlined'>
      | TextFieldProps<'standard'>
      | {
          autoFocus?: boolean;
          id?: string;
          onChange?: ChangeEventHandler;
          placeholder?: string;
          size?: 'small' | 'medium';
          value?: string;
          variant?: TextFieldVariants;
        }
    );

const TextFieldComponent = (props: CustomTextFieldProps) => {
  return <StyledTextField {...props} />;
};

export default TextFieldComponent;
