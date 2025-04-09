import { Avatar, AvatarProps } from '@mui/material';

export interface CustomAvatarProps extends AvatarProps {
  src?: string;
  alt?: string;
  size?: string;
}

const AvatarComponent = (props: CustomAvatarProps) => {
  return <Avatar {...props} sx={{ width: props.size, height: props.size }} />;
};

export default AvatarComponent;
