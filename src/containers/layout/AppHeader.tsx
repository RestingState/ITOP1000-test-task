import { AppBar } from '@mui/material';
import { FC } from 'react';
import NavBar from '../navbar/NavBar';

import { style } from './layout.style';

const AppHeader: FC = () => {
  return (
    <AppBar position='sticky' sx={style.container}>
      <NavBar />
    </AppBar>
  );
};

export default AppHeader;
