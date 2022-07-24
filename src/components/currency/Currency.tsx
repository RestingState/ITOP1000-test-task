import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { ICurrency } from '../../types/currency';

import { style } from './currency.style';

interface CurrencyProps {
  item: ICurrency;
}

const Currency: FC<CurrencyProps> = ({ item }) => {
  return (
    <Box sx={style.container}>
      <Typography sx={style.currCode}>{item.code}</Typography>
      <Typography sx={style.currExchangeRate}>
        {+(1 / item.exchangeRate).toFixed(2)}
      </Typography>
    </Box>
  );
};

export default Currency;
