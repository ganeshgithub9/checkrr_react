import CandidatesOrg from '../../organisms/Candidates';
import FilterSVG from '../../../assets/svgs/filter.svg';
import MoreSVG from '../../../assets/svgs/More.svg';
import ExportIcon from '../../../assets/svgs/export.svg';
import ManualOrderIcon from '../../../assets/svgs/manual_order.svg';
import { theme } from '../../../themes';

const CandidatesPage = () => {
  return (
    <CandidatesOrg
      {...{
        headerProps: {
          headingProps: {
            variant: 'h1',
            paragraph: false,
            content: 'Candidates'
          },
          outlinedButtonProps: {
            variant: 'outlined',
            label: 'Export',
            imageProps: {
              src: ExportIcon,
              alt: 'Export Icon'
            }
          },
          containedButtonProps: {
            variant: 'contained',
            label: 'Manual Order',
            imageProps: {
              src: ManualOrderIcon,
              alt: 'Manual Order Icon'
            }
          }
        },
        listUtilProps: {
          headingTypographyProps: {
            variant: 'subtitle1',
            paragraph: false,
            content: 'Candidate Information'
          },
          searchFieldProps: {
            autoFocus: false,
            placeholder: ' Search any candidate',
            variant: 'outlined'
          },
          filterButtonProps: {
            variant: 'outlined',
            label: 'Filter',
            imageProps: {
              src: FilterSVG,
              alt: 'Filter SVG'
            },
            sx: { height: '36px', color: theme.palette.textColor.mediumEmphasis }
          },
          moreButtonProps: {
            variant: 'outlined',

            imageProps: {
              src: MoreSVG,
              alt: 'More SVG'
            }
          }
        }
      }}
    />
  );
};
export default CandidatesPage;
