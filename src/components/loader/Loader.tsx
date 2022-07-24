import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';

import { style } from './loader.style';

const Loader: FC = () => {
  return (
    <Box sx={style.container}>
      <CircularProgress size={50} color='inherit' />
    </Box>
  );
};

export default Loader;
