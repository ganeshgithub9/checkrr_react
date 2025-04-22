import { Checkbox, FormControlLabel, FormControlLabelProps, Typography } from '@mui/material';
import { theme } from '../../../themes';

export interface CustomCheckBoxProps extends FormControlLabelProps {
  onStateChange?: any;
}

const CheckBoxComponent = (props: CustomCheckBoxProps) => {
  return (
    <FormControlLabel
      {...props}
      label={
        <Typography
          sx={{
            ...theme.typography.caption2,
            height: 24,
            color: theme.palette.textColor.highEmphasis
          }}>
          {props.label}
        </Typography>
      }
      control={<Checkbox />}
      onChange={props.onStateChange}
    />
  );
};

export default CheckBoxComponent;
