import { SelectChangeEvent } from '@mui/material';

export interface ICurrency {
  code: string;
  exchangeRate: number;
}

export interface IHandleInputRecalculationProps {
  value: number;
  exchangeCurrencyCode: string;
  exchangeRate: number;
  otherSelectedCurrency: ICurrency;
  setOtherInputValue: (num: number) => void;
}

export interface IHandleSelectorChangeProps {
  setSelectedCurrency: (newSelectedCurrency: ICurrency) => void;
  setExchangeCurrencyCode: (currency: string) => void;
}

export interface IHandleInputChangeProps {
  selectedCurrency: ICurrency;
  setInputValue: (num: number) => void;
  otherSelectedCurrency: ICurrency;
  setOtherInputValue: (num: number) => void;
}

export type HandleInputRecalculation = (
  props: IHandleInputRecalculationProps
) => void;
export type SelectorChangeHandler = (event: SelectChangeEvent) => void;
export type InputChangeHandler = (event: any) => void;
export type GetSelectorChangeHandler = (
  props: IHandleSelectorChangeProps
) => SelectorChangeHandler;
export type GetInputChangeHandler = (
  props: IHandleInputChangeProps
) => InputChangeHandler;
