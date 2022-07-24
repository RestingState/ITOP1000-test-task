import { Box } from '@mui/system';
import { FC } from 'react';
import Currency from '../../components/currency/Currency';
import { defaultCurrencyCode } from '../../constants/currency';
import useCurrencyApi from '../../hooks/useCurrencyApi';

import { style } from './navbar.style';

const NavBar: FC = () => {
  const { currencies: currenciesData } = useCurrencyApi({
    exchangeCurrencyCode: defaultCurrencyCode,
  });

  const currencies = currenciesData
    .filter(currency => currency.code !== defaultCurrencyCode)
    .map(currency => <Currency key={currency.code} item={currency} />);

  return <Box sx={style.header}>{currencies}</Box>;
};

export default NavBar;
