import {
  Stack,
  styled,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Table
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../themes';
import HeaderItem, { HeaderItemProps } from '../../molecules/HeaderItem';
import ListUtil, { ListUtilProps } from '../../molecules/ListUtil';
import Chip from '../../atoms/Chip';
import { candidateTableHeaders, pagingItemPropsObject } from '../../constants/objects';
import PagingItem from '../../molecules/PagingItem';

const StyledTableRow = styled(TableRow)(() => ({
  height: '45px',
  width: '100%'
}));

const StyledTableCell = styled(TableCell)(() => ({
  height: '45px',
  padding: '2px'
}));

export interface CandidatesProps {
  headerProps: HeaderItemProps;
  listUtilProps: ListUtilProps;
}

interface CandidateDataItemProps {
  id?: string;
  name?: string;
  adjudicaion?: string;
  status?: string;
  location?: string;
  date?: string;
}

interface CandidateDataProps {
  pageSize?: number;
  totalRecords?: number;
  list?: CandidateDataItemProps[];
  [key: string]: any;
}

const candidatesListPagingItemProps = {
  ...pagingItemPropsObject
};

const CandidatesComponent = (props: CandidatesProps) => {
  const [candidateData, setCandidateData] = useState({} as CandidateDataProps);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/candidates-adjudication')
      .then((res) => setCandidateData(res.data))
      .catch((err) => alert(err));
  }, [candidateData]);

  if (candidatesListPagingItemProps.pagingTypographyProps && candidateData.pageSize) {
    candidatesListPagingItemProps.pagingTypographyProps.content = ` ${candidateData.pageSize} out of ${candidateData.totalRecords} results`;
  }

  return (
    <Stack spacing={7}>
      <HeaderItem {...props.headerProps} />
      <ListUtil {...props.listUtilProps} />
      <Table>
        <TableHead>
          <StyledTableRow>
            {candidateTableHeaders.map((header) => (
              <StyledTableCell key={header}>
                <Typography sx={theme.typography.caption1 || {}}>{header}</Typography>
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {candidateData.list?.map((record: CandidateDataItemProps) => (
            <StyledTableRow
              onClick={() => navigate(`/candidates/${record.id}`)}
              key={record.id}
              data-testid="candidate-item">
              <StyledTableCell>
                <Typography sx={theme.typography.body2 || {}}>{record.name}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography sx={theme.typography.body2 || {}}>{record.adjudicaion}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Chip label={record.status} variant="filled" />
              </StyledTableCell>
              <StyledTableCell>
                <Typography sx={theme.typography.body2 || {}}>{record.location}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography sx={theme.typography.body2 || {}}>{record.date}</Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <PagingItem {...pagingItemPropsObject} />
    </Stack>
  );
};

export default CandidatesComponent;
