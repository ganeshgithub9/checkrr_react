import {
  Box,
  BoxProps,
  InputLabel,
  InputLabelProps,
  FormControl,
  FormControlProps,
  Select,
  SelectProps,
  styled
} from '@mui/material';
import MenuItem, { CustomMenuItemProps } from '../../atoms/MenuItem';
import { theme } from '../../../themes';

const StyledSelect = styled(Select)(() => ({
  borderColor: theme.palette.structuralColor.stroke,
  borderWidth: 0.8
}));

interface CustomInputLabelProps extends InputLabelProps {
  label?: string;
}

export interface CustomDropdownProps {
  boxProps?: BoxProps;
  formControlProps?: FormControlProps;
  inputLabelProps?: CustomInputLabelProps;
  selectProps?: SelectProps;
  menuItems?: CustomMenuItemProps[];
}

const DropdownComponent = (props: CustomDropdownProps) => {
  return (
    <Box {...props.boxProps}>
      <FormControl {...props.formControlProps}>
        <InputLabel {...props.inputLabelProps}>{props.inputLabelProps?.label}</InputLabel>
        <StyledSelect {...props.selectProps}>
          {props.menuItems?.map((item) => <MenuItem {...item} />)}
        </StyledSelect>
      </FormControl>
    </Box>
  );
};
export default DropdownComponent;
