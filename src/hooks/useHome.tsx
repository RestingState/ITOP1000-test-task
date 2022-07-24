import { useCallback, useEffect, useState } from 'react';
import {
  defaultCurrencyCode,
  roundCurrencyFixedNum,
} from '../constants/currency';
import {
  ICurrency,
  HandleInputRecalculation,
  GetSelectorChangeHandler,
  GetInputChangeHandler,
} from '../types/currency';
import { getCurrencyByCode, roundToFixed } from '../utils/currency';
import useCurrencyApi from './useCurrencyApi';

const useHome = () => {
  const [exchangeCurrencyCode, setExchangeCurrencyCode] =
    useState<string>(defaultCurrencyCode);
  const { currencies, loading, refetch } = useCurrencyApi({
    exchangeCurrencyCode,
  });
  const [firstInputValue, setFirstInputValue] = useState(0);
  const [secondInputValue, setSecondInputValue] = useState(0);
  const [firstSelectedCurrency, setFirstSelectedCurrency] = useState<ICurrency>(
    { code: 'USD', exchangeRate: 1 }
  );
  const [secondSelectedCurrency, setSecondSelectedCurrency] =
    useState<ICurrency>({ code: 'UAH', exchangeRate: 1 });

  useEffect(() => {
    if (currencies.length) {
      const newFirstSelectedCurrency = getCurrencyByCode(
        currencies,
        firstSelectedCurrency.code
      ) as ICurrency;
      const newSecondSelectedCurrency = getCurrencyByCode(
        currencies,
        secondSelectedCurrency.code
      ) as ICurrency;

      setFirstSelectedCurrency(newFirstSelectedCurrency);
      setSecondSelectedCurrency(newSecondSelectedCurrency);

      if (newFirstSelectedCurrency.code === newSecondSelectedCurrency.code) {
        const value = roundToFixed(
          firstInputValue * newSecondSelectedCurrency.exchangeRate
        );
        setSecondInputValue(value);
      } else if (exchangeCurrencyCode === newFirstSelectedCurrency.code) {
        const value = roundToFixed(
          firstInputValue * newSecondSelectedCurrency.exchangeRate
        );
        setSecondInputValue(value);
      } else if (exchangeCurrencyCode === newSecondSelectedCurrency.code) {
        const value = roundToFixed(
          secondInputValue * newFirstSelectedCurrency.exchangeRate
        );
        setFirstInputValue(value);
      }
    }
  }, [currencies]);

  const handleInputRecalculation: HandleInputRecalculation = ({
    value,
    exchangeCurrencyCode,
    exchangeRate,
    otherSelectedCurrency,
    setOtherInputValue,
  }) => {
    const newValue = calculateNewValue(
      value,
      exchangeCurrencyCode,
      exchangeRate,
      otherSelectedCurrency.exchangeRate
    );
    setOtherInputValue(roundToFixed(newValue));
  };

  const getSelectorChangeHandler: GetSelectorChangeHandler =
    ({ setSelectedCurrency, setExchangeCurrencyCode }) =>
    event => {
      const code = event.target.value;
      const newSelectedCurrency = getCurrencyByCode(currencies, code);
      setSelectedCurrency(newSelectedCurrency as ICurrency);
      setExchangeCurrencyCode(newSelectedCurrency?.code as string);
      if (newSelectedCurrency?.code === exchangeCurrencyCode) {
        refetch();
      }
    };

  const getInputChangeHandler: GetInputChangeHandler =
    ({
      selectedCurrency,
      setInputValue,
      otherSelectedCurrency,
      setOtherInputValue,
    }) =>
    event => {
      setInputValue(event.target.value);
      handleInputRecalculation({
        value: event.target.value as unknown as number,
        exchangeCurrencyCode: selectedCurrency.code,
        exchangeRate: selectedCurrency.exchangeRate,
        otherSelectedCurrency,
        setOtherInputValue,
      });
    };

  const calculateNewValue = (
    value: number,
    selectorExchangeCurrencyCode: string,
    ownExchangeRate: number,
    otherCurrencyExchangeRate: number
  ) => {
    if (selectorExchangeCurrencyCode === exchangeCurrencyCode) {
      return value * otherCurrencyExchangeRate;
    }
    return value * (1 / ownExchangeRate);
  };

  const handleFirstSelectorChange = useCallback(
    getSelectorChangeHandler({
      setSelectedCurrency: setFirstSelectedCurrency,
      setExchangeCurrencyCode,
    }),
    [currencies]
  );

  const handleSecondSelectorChange = useCallback(
    getSelectorChangeHandler({
      setSelectedCurrency: setSecondSelectedCurrency,
      setExchangeCurrencyCode,
    }),
    [currencies]
  );

  return {
    currencies,
    loading,
    firstInputValue,
    secondInputValue,
    firstSelectedCurrency,
    secondSelectedCurrency,
    setFirstSelectedCurrency,
    setSecondSelectedCurrency,
    setFirstInputValue,
    setSecondInputValue,
    setExchangeCurrencyCode,
    handleFirstSelectorChange,
    handleSecondSelectorChange,
    getInputChangeHandler,
  };
};

export default useHome;
