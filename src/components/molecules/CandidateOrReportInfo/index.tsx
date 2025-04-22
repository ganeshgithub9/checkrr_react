import { styled } from '@mui/material';
import Typography, { CustomTypographyProps } from '../../atoms/Typography';
import Image, { ImageProps } from '../../atoms/Image';
import { theme } from '../../../themes';

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'left',
  width: '300px',
  height: '68 px',
  gap: '10px',
  borderWidth: '1px',
  borderRadius: '12px',
  borderStyle: 'solid',
  borderColor: theme.palette.structuralColor.stroke,
  padding: '10px',
  backgroundColor: theme.palette.accent.lightBlue
  //width: '238px',
  //width: '100%',
  //backgroundColor: 'blue',
}));

const StyledKeyValueDiv = styled('div')(() => ({
  //width: '116 px',
  height: '44px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

export interface CandidateOrReportInfoProps {
  imageProps: ImageProps;
  keyTypographyProps: CustomTypographyProps;
  valueTypographyProps: CustomTypographyProps;
}

const CandidateOrReportInfoComponent = (props: CandidateOrReportInfoProps) => {
  return (
    <StyledDiv>
      <Image {...props.imageProps} />
      <StyledKeyValueDiv>
        <Typography
          {...props.keyTypographyProps}
          sx={{ ...theme.typography.body2, color: theme.palette.textColor.mediumEmphasis }}
        />
        <Typography
          {...props.valueTypographyProps}
          sx={{
            ...theme.typography.body1,
            color: theme.palette.textColor.highEmphasis
          }}
        />
      </StyledKeyValueDiv>
    </StyledDiv>
  );
};

export default CandidateOrReportInfoComponent;
