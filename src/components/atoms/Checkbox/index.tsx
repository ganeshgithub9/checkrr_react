import { Checkbox, FormControlLabel, FormControlLabelProps } from '@mui/material';

export interface CustomCheckBoxProps extends FormControlLabelProps {}

const CheckBoxComponent = (props: CustomCheckBoxProps) => {
  return <FormControlLabel {...props} control={<Checkbox />} />;
};

export default CheckBoxComponent;
