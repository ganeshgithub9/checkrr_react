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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../themes';
import HeaderItem, { HeaderItemProps } from '../../molecules/HeaderItem';
import ListUtil, { ListUtilProps } from '../../molecules/ListUtil';
import Chip from '../../atoms/Chip';
import {
  candidateTableHeaders,
  pagingItemPropsObject,
  statusFilterCheckboxLabels,
  adjudicationFilterCheckboxLabels
} from '../../constants/objects';
import PagingItem from '../../molecules/PagingItem';
import FiltersBox from '../../molecules/FiltersBox';

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
  adjudication?: string;
  status?: string;
  location?: string;
  date?: string;
}

interface CandidateDataProps {
  first: number;
  last: number;
  prev: number;
  next: number;
  pages: number;
  items: number;
  data: CandidateDataItemProps[];
}

interface IsCheckedProps {
  'All Status': boolean;
  Clear: boolean;
  Consider: boolean;
  All: boolean;
  Engaged: boolean;
  'Pre adverse action': boolean;
  [key: string]: boolean;
}

const candidatesListPagingItemProps = {
  ...pagingItemPropsObject
};

const debounceFunc = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

const CandidatesComponent = (props: CandidatesProps) => {
  const [candidateData, setCandidateData] = useState<CandidateDataProps>({
    first: 0,
    last: 0,
    prev: 0,
    next: 0,
    pages: 0,
    items: 0,
    data: []
  });
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState<IsCheckedProps>({
    'All Status': false,
    Clear: false,
    Consider: false,
    All: false,
    Engaged: false,
    'Pre adverse action': false
  });
  const navigate = useNavigate();

  const handleFilterButtonClick = () => {
    setIsChecked({
      'All Status': false,
      Clear: false,
      Consider: false,
      All: false,
      Engaged: false,
      'Pre adverse action': false
    });
    setIsFilterClicked((prev) => !prev);
    setCurrentPage(1);
    setName('');
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const searchByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const url = `http://localhost:3000/candidates-adjudication?_page=${currentPage}&_per_page=${pageSize}&name=${value}`;
    axios
      .get(url)
      .then((res) => {
        setCandidateData(res.data);
      })
      .catch((err) => alert(err));
  };

  // Optimized handler with debounce
  const optimisedSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchHandler(event);
    debounceFunc(searchByName, 2000)(event);
  };

  useEffect(() => {
    let url = `http://localhost:3000/candidates-adjudication?_page=${currentPage}&_per_page=${pageSize}`;
    if (isChecked['Clear']) {
      url += `&status=CLEAR`;
    }
    if (isChecked['Consider']) {
      url += `&status=CONSIDER`;
    }
    if (isChecked['Engaged']) {
      url += `&adjudication=ENGAGE`;
    }
    if (isChecked['Pre adverse action']) {
      url += `&adjudication=PRE ADVERSE ACTION`;
    }
    axios
      .get(url)
      .then((res) => setCandidateData(res.data))
      .catch((err) => alert(err));
  }, [currentPage, pageSize, isChecked]);

  if (props.listUtilProps.searchFieldProps) {
    props.listUtilProps.searchFieldProps.onClick = () => {
      setIsChecked({
        'All Status': false,
        Clear: false,
        Consider: false,
        All: false,
        Engaged: false,
        'Pre adverse action': false
      });
      setIsFilterClicked(false);
      setCurrentPage(1);
      setName('');
    };
    props.listUtilProps.searchFieldProps.onChange = optimisedSearchHandler;
    props.listUtilProps.searchFieldProps.value = name;
  }
  props.listUtilProps.filterButtonProps.onClick = handleFilterButtonClick;
  candidatesListPagingItemProps.dropdownProps.onOptionChange = (value: number) =>
    setPageSize(value);
  if (candidatesListPagingItemProps.paginationProps) {
    candidatesListPagingItemProps.paginationProps.onChange = (event: unknown, value: number) => {
      setCurrentPage(value);
    };
    candidatesListPagingItemProps.paginationProps.count = candidateData.pages;
    candidatesListPagingItemProps.paginationProps.page = currentPage;
  }
  candidatesListPagingItemProps.dropdownProps.selectProps.value = pageSize;
  if (candidatesListPagingItemProps.pagingTypographyProps) {
    candidatesListPagingItemProps.pagingTypographyProps.content = `${candidateData.data.length} out of ${candidateData.items} results`;
  }

  return (
    <Stack spacing={2} sx={{ margin: '10px' }}>
      <HeaderItem {...props.headerProps} />
      <div
        style={{
          borderRadius: '8px',
          height: '100%',
          backgroundColor: theme.palette.structuralColor.white,
          //margin: '20px',
          boxShadow: '0px 4px 28px 0px #2D2D2F19',
          padding: '10px'
          // display: 'flex',
          // flexDirection: 'column',
          // flexWrap: 'wrap',
          // alignContent: 'space-between',
          // justifyContent: 'space-between',
          // gap: '2px'
        }}>
        <div
          style={{
            position: 'relative'
          }}>
          <ListUtil {...props.listUtilProps} />
          {isFilterClicked && (
            <FiltersBox
              {...{
                checkboxLabels: statusFilterCheckboxLabels,
                heading: 'Filters',
                subHeading: 'Status',
                subHeading2: 'Adjudication',
                checkboxLabels2: adjudicationFilterCheckboxLabels,
                onStateChange: (label: string) => {
                  setIsChecked((prev) => ({
                    ...prev,
                    [label]: !prev[label]
                  }));
                }
              }}
            />
          )}
        </div>
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
            {candidateData.data?.map((record: CandidateDataItemProps) => (
              <StyledTableRow
                onClick={(event) => {
                  event.stopPropagation();
                  navigate(`/candidates/${record.id}`);
                }}
                key={record.id}
                data-testid="candidate-item">
                <StyledTableCell>
                  <Typography
                    sx={{
                      ...theme.typography.body2,
                      color: theme.palette.primaryColor.primary500
                    }}>
                    {record.name}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography sx={theme.typography.body2}>{record.adjudication}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Chip
                    label={record.status}
                    variant="outlined"
                    sx={{
                      ...theme.typography.caption2,
                      color:
                        record.status === 'CLEAR'
                          ? theme.palette.accent.green
                          : theme.palette.accent.yellow,
                      backgroundColor:
                        record.status === 'CLEAR'
                          ? theme.palette.accent.lightGreen
                          : theme.palette.accent.lightYellow
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <Typography sx={theme.typography.body2}>{record.location}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography sx={theme.typography.body2}>{record.date}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <PagingItem {...candidatesListPagingItemProps} />
      </div>
    </Stack>
  );
};

export default CandidatesComponent;
