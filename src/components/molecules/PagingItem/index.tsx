import { Box, styled } from '@mui/material';
import Pagination, { CustomPaginationProps } from '../../atoms/Pagination';
import Typography, { CustomTypographyProps } from '../../atoms/Typography';
import Dropdown, { CustomDropdownProps } from '../../molecules/Dropdown';
import { theme } from '../../../themes';

const StyledPagingTypography = styled(Typography)(() => ({
  ...theme.typography.caption2,
  color: theme.palette.textColor.mediumEmphasis
}));

const stylingObjects = {
  outerBoxStyling: {
    height: '56px',
    width: '100%',
    display: 'flex',
    gap: '10px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxSizing: 'border-box'
  },
  innerBoxStyling: {
    height: '56px',
    width: '800px',
    display: 'flex',
    gap: '10px',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    boxSizing: 'border-box'
  }
};

export interface PagingItemProps {
  pagingTypographyProps?: CustomTypographyProps;
  dropdownProps?: CustomDropdownProps;
  paginationProps?: CustomPaginationProps;
}

const PagingItemComponent = (props: PagingItemProps) => {
  return (
    <Box sx={stylingObjects.outerBoxStyling}>
      <Box sx={stylingObjects.innerBoxStyling}>
        <StyledPagingTypography {...props.pagingTypographyProps} />
        <Dropdown {...props.dropdownProps} />
      </Box>
      <Pagination {...props.paginationProps} />
    </Box>
  );
};

export default PagingItemComponent;
