import {
  Box,
  BoxProps,
  InputLabel,
  InputLabelProps,
  FormControl,
  FormControlProps,
  Select,
  SelectProps,
  styled,
  MenuItem
} from '@mui/material';
import { CustomMenuItemProps } from '../../atoms/MenuItem';
import { theme } from '../../../themes';

const StyledSelect = styled(Select)(() => ({
  borderColor: theme.palette.structuralColor.stroke,
  borderWidth: 0.8,
  fontSize: '14px'
}));

interface CustomInputLabelProps extends InputLabelProps {
  label?: string;
}

export interface CustomDropdownProps {
  boxProps?: BoxProps;
  formControlProps?: FormControlProps;
  inputLabelProps?: CustomInputLabelProps;
  selectProps: SelectProps;
  onOptionChange?: any;
  menuItems?: CustomMenuItemProps[];
}

const DropdownComponent = (props: CustomDropdownProps) => {
  return (
    <Box {...props.boxProps}>
      <FormControl {...props.formControlProps}>
        <InputLabel {...props.inputLabelProps}>{props.inputLabelProps?.label}</InputLabel>
        <StyledSelect
          {...props.selectProps}
          onChange={(event) => {
            props.onOptionChange(event.target.value);
          }}>
          {props.menuItems?.map((item) => (
            <MenuItem sx={{ fontSize: '14px' }} {...item}>
              {item.label}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </Box>
  );
};
export default DropdownComponent;
