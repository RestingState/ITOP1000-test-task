import { Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <Typography color={blueGrey[900]}>
      Currency Converter &copy; 2022
    </Typography>
  );
};

export default Footer;
