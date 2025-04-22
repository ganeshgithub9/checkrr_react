import { Chip, ChipProps } from '@mui/material';

export interface CustomChipProps extends ChipProps {
  label?: string | undefined;
  variant: 'filled' | 'outlined';
}

const ChipComponent = (props: CustomChipProps) => {
  return <Chip {...props} />;
};

export default ChipComponent;
