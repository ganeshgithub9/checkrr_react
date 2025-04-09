import { Chip, ChipProps } from '@mui/material';

export interface CustomChipProps extends ChipProps {
  label?: string | undefined;
  variant: 'filled' | 'outlined';
}

const ChipComponent = (props: CustomChipProps) => {
  return <Chip label={props.label} variant={props.variant} />;
};

export default ChipComponent;
