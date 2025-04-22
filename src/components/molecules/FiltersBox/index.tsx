import { theme } from '../../../themes';
import Checkbox from '../../atoms/Checkbox';
import Typography from '../../atoms/Typography';
import { CheckboxLabelsProps } from '../../../components/constants/objects';
import { Stack } from '@mui/material';

export interface FiltersBoxProps {
  heading: string;
  subHeading: string;
  checkboxLabels: CheckboxLabelsProps[];
  subHeading2?: string;
  checkboxLabels2?: CheckboxLabelsProps[];
  onStateChange: any;
}

const FiltersBox = ({
  heading,
  subHeading,
  checkboxLabels,
  subHeading2,
  checkboxLabels2,
  onStateChange
}: FiltersBoxProps) => {
  return (
    <Stack
      spacing={'5px'}
      sx={{
        position: 'absolute',
        top: '100%',
        right: '0%',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        zIndex: 20,
        marginTop: '10px',
        width: '200px',
        height: '352px',
        backgroundColor: 'white',
        padding: '10px'
      }}>
      <Typography
        key={'filter-heading'}
        content={heading}
        sx={{ ...theme.typography.body1, color: theme.palette.textColor.highEmphasis }}
      />
      <Typography
        key={'status-heading'}
        content={subHeading}
        sx={{ ...theme.typography.body1, color: theme.palette.textColor.lowEmphasis }}
      />
      <Stack
        spacing={'8px'}
        sx={{ ...theme.typography.caption2, color: theme.palette.textColor.highEmphasis }}>
        {checkboxLabels.map((labelObject) => (
          <Checkbox
            {...labelObject}
            control={<></>}
            onStateChange={() => onStateChange(labelObject.label)}
          />
        ))}
      </Stack>
      <Typography
        content={subHeading2 ?? ''}
        sx={{ ...theme.typography.body1, color: theme.palette.textColor.lowEmphasis }}
      />
      <Stack
        spacing={'8px'}
        sx={{ ...theme.typography.caption2, color: theme.palette.textColor.highEmphasis }}>
        {checkboxLabels2?.map((labelObject) => (
          <Checkbox
            {...labelObject}
            control={<></>}
            onStateChange={() => onStateChange(labelObject.label)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default FiltersBox;
