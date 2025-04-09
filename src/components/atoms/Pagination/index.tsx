import { Pagination, PaginationProps } from '@mui/material';

export interface CustomPaginationProps extends PaginationProps {}

const PaginationComponent = (props: CustomPaginationProps) => {
  return <Pagination {...props} />;
};

export default PaginationComponent;
