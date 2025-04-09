import {} from '@mui/material';
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
import PagingItem, { PagingItemProps } from '../../molecules/PagingItem';
import Chip from '../../atoms/Chip';

const StyledTableRow = styled(TableRow)(() => ({
  height: '45px',
  width: '100%'
}));

const StyledTableCell = styled(TableCell)(() => ({
  height: '45px',
  padding: '2px'
}));

export interface MainProps {
  headerProps: HeaderItemProps;
  listUtilProps: ListUtilProps;
}

interface CandidateDataProps {
  id?: string;
  name?: string;
  adjudicaion?: string;
  status?: string;
  location?: string;
  date?: string;
}

const tableHeaders = ['NAME', 'ADJUDICATION', 'STATUS', 'LOCATION', 'DATE'];

const pagingItemProps: PagingItemProps = {
  pagingTypographyProps: {
    variant: 'body1',
    content: '10 out of 84 results'
  },
  dropdownProps: {
    inputLabelProps: {
      label: 'page size'
    },
    selectProps: {
      sx: {
        width: 120,
        height: 26
      },
      value: 10,
      label: '10 per page'
    },
    menuItems: [
      { value: 10, label: '10 per page' },
      { value: 20, label: '20 per page' },
      { value: 30, label: '30 per page' }
    ]
  },
  paginationProps: {
    count: 3,
    shape: 'rounded'
  }
};

const CandidatesComponent = (props: MainProps) => {
  const [candidateData, setCandidateData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/candidates-adjudication')
      .then((res) => setCandidateData(res.data))
      .catch((err) => alert(err));
  }, [candidateData]);

  return (
    <Stack spacing={7}>
      <HeaderItem {...props.headerProps} />
      <ListUtil {...props.listUtilProps} />
      <Table>
        <TableHead>
          <StyledTableRow>
            {tableHeaders.map((header) => (
              <StyledTableCell>
                <Typography sx={theme.typography.caption1 || {}}>{header}</Typography>
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {candidateData.map((record: CandidateDataProps) => (
            <StyledTableRow onClick={() => navigate(`/candidates/${record.id}`)}>
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
      <PagingItem {...pagingItemProps} />
    </Stack>
  );
};

export default CandidatesComponent;
