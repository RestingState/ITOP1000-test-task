import { Box, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import CurrencyConverterInput from '../../components/currency-converter-input/CurrencyConverterInput';
import {
  ICurrency,
  InputChangeHandler,
  SelectorChangeHandler,
} from '../../types/currency';

import { style } from './currency-converter';

interface ICurrencyConverterProps {
  currencies: ICurrency[];
  firstInputValue: number;
  secondInputValue: number;
  firstSelectedCurrency: ICurrency;
  secondSelectedCurrency: ICurrency;
  handleFirstSelectorChange: SelectorChangeHandler;
  handleSecondSelectorChange: SelectorChangeHandler;
  handleFirstInputChange: InputChangeHandler;
  handleSecondInputChange: InputChangeHandler;
}

const CurrencyConverter: FC<ICurrencyConverterProps> = ({
  currencies,
  firstInputValue,
  secondInputValue,
  firstSelectedCurrency,
  secondSelectedCurrency,
  handleFirstSelectorChange,
  handleSecondSelectorChange,
  handleFirstInputChange,
  handleSecondInputChange,
}) => {
  return (
    <Box sx={style.container}>
      <Paper elevation={6} sx={style.paper}>
        <Typography variant='h5'>Currency converter</Typography>
        <CurrencyConverterInput
          currencies={currencies}
          inputValue={firstInputValue}
          selectedCurrency={firstSelectedCurrency}
          handleInputChange={handleFirstInputChange}
          handleSelectorChange={handleFirstSelectorChange}
        />
        <CurrencyConverterInput
          currencies={currencies}
          inputValue={secondInputValue}
          selectedCurrency={secondSelectedCurrency}
          handleInputChange={handleSecondInputChange}
          handleSelectorChange={handleSecondSelectorChange}
        />
      </Paper>
    </Box>
  );
};

export default CurrencyConverter;
