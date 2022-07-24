import { currencyBaseApiUrl } from './../../constants/currency';
import axios from 'axios';

export const axiosCurrencyInstance = axios.create({
  baseURL: currencyBaseApiUrl,
});
