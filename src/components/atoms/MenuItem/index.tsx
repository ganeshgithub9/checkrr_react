import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';

export interface CustomMenuItemProps extends MenuItemProps {
  label: string;
  value: number;
}

const MenuItemComponent = (props: CustomMenuItemProps) => {
  return <MenuItem value={props.value}>{props.label}</MenuItem>;
};

export default MenuItemComponent;
