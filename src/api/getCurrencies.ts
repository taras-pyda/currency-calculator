import { Currency } from '../types/Currency';

export const getCurrencies = () => {
  return fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(response => response.json())
    .then(currencies => currencies.filter(
      (currency: Currency) => currency.ccy !== 'BTC'
    ));
};
