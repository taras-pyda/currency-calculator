import { ChangeEventHandler, FunctionComponent, useContext } from 'react';

// Styles
import './CurrencyItem.scss';

// Context
import { CurrencyContext } from '../../contexts/CurrencyProvider';

// Types
import { Currency } from '../../types/Currency';

type Props = {
  sum: number,
  changeSum: (value: number) => void,
  selectedCurrency: Currency,
  changeCurrency: (ccy: string) => void,
};

export const CurrencyItem: FunctionComponent<Props> = ({
  sum,
  changeSum,
  selectedCurrency,
  changeCurrency,
}) => {
  const currencies = useContext<Currency[]>(CurrencyContext);
  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = +e.target.value;

    if (value >= 0) {
      changeSum(value);
    };
  };

  return (
    <div className="CurrencyItem">
      <input
        type="number"
        value={sum}
        name="sum"
        onChange={inputChangeHandler}
        className="CurrencyItem__Input"
      />

      <select
        className="CurrencyItem__Select"
        name="currencies"
        value={selectedCurrency.ccy}
        onChange={(e) => {
          changeCurrency(e.target.value)
        }}
      >
        <option value="UAH">UAH</option>

        {currencies.map(({ ccy }) => (
          <option
            key={ccy}
            value={ccy}
            defaultChecked={ccy === selectedCurrency.ccy}
          >
            {ccy}
          </option>
        ))}
      </select>
    </div>
  )
};