import { useEffect, useState } from 'react';
import { currenciesForExchange } from '../constants/currency';
import { axiosCurrencyInstance } from '../plugins/axios/axiosCurrencyInstance';
import { ICurrency } from '../types/currency';

interface ICurrencyEntity {
  [key: string]: number;
}

interface IGetCurrencyResponse {
  results: ICurrencyEntity;
}

interface IUseCurrencyApiProps {
  exchangeCurrencyCode: string;
}

const useCurrencyApi = ({ exchangeCurrencyCode }: IUseCurrencyApiProps) => {
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState();

  const getListOfCurrencies = async (from: string, to: string) => {
    try {
      setLoading(true);
      const response = await axiosCurrencyInstance.post<IGetCurrencyResponse>(
        `/fetch-multi?api_key=${
          process.env.REACT_APP_CURRENCY_API_KEY as string
        }&from=${from}&to=${to}`
      );
      const fetchedCurrencies: ICurrency[] = Object.entries(
        response.data.results
      ).map(([key, value]) => ({
        code: key,
        exchangeRate: value,
      }));
      setCurrencies(fetchedCurrencies);
    } catch (err: any) {
      setError(err.response);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    getListOfCurrencies(exchangeCurrencyCode, currenciesForExchange.join());
  };

  useEffect(() => {
    getListOfCurrencies(exchangeCurrencyCode, currenciesForExchange.join());
  }, [exchangeCurrencyCode]);

  return { currencies, loading, error, refetch };
};

export default useCurrencyApi;
