import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import {
  ICurrency,
  InputChangeHandler,
  SelectorChangeHandler,
} from '../../types/currency';
import CurrencySelector from '../currency-selector/CurrencySelector';

import { style } from './currency-converter-input';

interface ICurrencyConverterInput {
  currencies: ICurrency[];
  inputValue: number;
  selectedCurrency: ICurrency;
  handleInputChange: InputChangeHandler;
  handleSelectorChange: SelectorChangeHandler;
}

const CurrencyConverterInput: FC<ICurrencyConverterInput> = ({
  currencies,
  inputValue,
  selectedCurrency,
  handleInputChange,
  handleSelectorChange,
}) => {
  return (
    <Box sx={style.container}>
      <TextField
        id='outlined-basic'
        variant='outlined'
        type={'number'}
        value={inputValue}
        onChange={handleInputChange}
      />
      <CurrencySelector
        selectedCurrency={selectedCurrency}
        currencies={currencies}
        handleSelectorChange={handleSelectorChange}
      />
    </Box>
  );
};

export default CurrencyConverterInput;
