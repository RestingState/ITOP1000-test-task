import { ICurrency } from './../types/currency';

export const getCurrencyByCode = (currencies: ICurrency[], code: string) =>
  currencies.find(currency => currency.code === code);
