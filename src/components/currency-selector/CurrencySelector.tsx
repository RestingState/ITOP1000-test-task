import { MenuItem, Select } from '@mui/material';
import { FC } from 'react';
import { ICurrency, SelectorChangeHandler } from '../../types/currency';

interface ICurrencySelectorProps {
  selectedCurrency: ICurrency;
  currencies: ICurrency[];
  handleSelectorChange: SelectorChangeHandler;
}

const CurrencySelector: FC<ICurrencySelectorProps> = ({
  selectedCurrency,
  currencies,
  handleSelectorChange,
}) => {
  return (
    <Select value={selectedCurrency.code} onChange={handleSelectorChange}>
      {currencies.map(currency => (
        <MenuItem key={currency.code} value={currency.code}>
          {currency.code}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CurrencySelector;
