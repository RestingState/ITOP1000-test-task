import { roundCurrencyFixedNum } from '../constants/currency';
import { ICurrency } from './../types/currency';

export const getCurrencyByCode = (currencies: ICurrency[], code: string) =>
  currencies.find(currency => currency.code === code);

export const roundToFixed = (
  num: number,
  fixedNum: number = roundCurrencyFixedNum
) => Number(num.toFixed(fixedNum));
