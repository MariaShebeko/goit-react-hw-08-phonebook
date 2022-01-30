import { Avatar } from '@mui/material';

export default function UserAvatar({ name }) {
  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}`,
    };
  }

  return <Avatar {...stringAvatar(name)} />;
}
