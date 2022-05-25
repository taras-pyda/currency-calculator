import { FunctionComponent, useContext, useState, useEffect } from 'react';

// Styles
import './CurrencyCalculator.scss';

// Context
import { CurrencyContext } from '../../contexts/CurrencyProvider';

// Types
import { Currency } from '../../types/Currency';

// Components
import { CurrencyItem } from '../CurrencyItem';

export const CurrencyCalculator: FunctionComponent = () => {
  const currencies = useContext<Currency[]>(CurrencyContext);
  const uahCurrency = {
    base_ccy: 'UAH',
    buy: '1',
    ccy: 'UAH',
    sale: '1',
  };
  const [sellCurrency, setSellCurrency] = useState(uahCurrency);
  const [buyCurrency, setBuyCurrency] = useState(uahCurrency);
  const [saleSum, setSaleSum] = useState(100);
  const [buySum, setBuySum] = useState(0);

  const getExchangeRate = () => {
    let exchangeRate = (+sellCurrency.buy) / (+buyCurrency.sale);

    if (sellCurrency.ccy === 'UAH') {
      exchangeRate = (+uahCurrency.buy) / (+buyCurrency.sale);
    };

    if (buyCurrency.ccy === 'UAH') {
      exchangeRate = +sellCurrency.buy;
    };

    return +exchangeRate.toFixed(5);
  };

  useEffect(() => {
    setSellCurrency(currencies.find(
      currency => currency.ccy === 'USD') || uahCurrency
    );
  }, [currencies]);

  useEffect(() => {
    const newSum = saleSum * getExchangeRate();

    setBuySum(+newSum.toFixed(5))
  }, [sellCurrency, buyCurrency])

  const changeSaleSum = (sum: number) => {
    setSaleSum(sum);
    const newBuySum = sum * getExchangeRate();

    setBuySum(+newBuySum.toFixed(5));
  };

  const changeBuySum = (sum: number) => {
    setBuySum(sum);
    const newSellSum = sum / getExchangeRate();

    setSaleSum(+newSellSum.toFixed(5));
  };

  const changeSaleCurrency = (ccy: string) => {
    const selectedCurrency = currencies.find(currency => currency.ccy === ccy) || uahCurrency;

    setSellCurrency(selectedCurrency);
  };

  const changeBuyCurrency = (ccy: string) => {
    const selectedCurrency = currencies.find(currency => currency.ccy === ccy) || uahCurrency;

    setBuyCurrency(selectedCurrency);
  };

  return (
    <div className="CurrencyCalculator">
      <CurrencyItem
        sum={saleSum}
        changeSum={changeSaleSum}
        selectedCurrency={sellCurrency}
        changeCurrency={changeSaleCurrency}
      />

      <CurrencyItem
        sum={buySum}
        changeSum={changeBuySum}
        selectedCurrency={buyCurrency}
        changeCurrency={changeBuyCurrency}
      />
    </div>
  )
};