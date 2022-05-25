import { FunctionComponent, useContext } from 'react';

// Styles
import './Header.scss';

// Context
import { CurrencyContext } from '../../contexts/CurrencyProvider';

export const Header: FunctionComponent = () => {
  const currencies = useContext(CurrencyContext);
  const usdCurrency = currencies.find(currency => currency.ccy === 'USD');
  const eurCurrency = currencies.find(currency => currency.ccy === 'EUR');

  return (
    <header className='Header'>
      {currencies[0] && (
        <>
          {usdCurrency && (
            <div className='Header__Currency'>
              <h4 className='Header__Currency-title'>
                USD:
              </h4>

              <p className='Header__Currency-exchange-rates'>
                <span className='Header__Currency-rate'>
                  Buy - {usdCurrency.buy}
                </span>

                <span className='Header__Currency-rate'>
                  Sale - {usdCurrency.sale}
                </span>
              </p>
            </div>
          )}

          {eurCurrency && (
            <div className='Header__Currency'>
              <h4 className='Header__Currency-title'>
                EUR:
              </h4>

              <p className='Header__Currency-exchange-rates'>
                <span className='Header__Currency-rate'>
                  Buy - {eurCurrency.buy}
                </span>

                <span className='Header__Currency-rate'>

                  Sale - {eurCurrency.sale}
                </span>
              </p>
            </div>
          )}
        </>
      )}
    </header>
  )
};
