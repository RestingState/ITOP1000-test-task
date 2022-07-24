import { AppBar } from '@mui/material';
import { FC } from 'react';
import Footer from '../footer/Footer';

import { style } from './layout.style';

const AppFooter: FC = () => {
  return (
    <AppBar position='sticky' sx={{ ...style.container, textAlign: 'center' }}>
      <Footer />
    </AppBar>
  );
};

export default AppFooter;
