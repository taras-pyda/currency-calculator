import {
    FunctionComponent,
    createContext,
    useState,
    useEffect,
    ReactNode,
} from 'react';

// Types
import { Currency } from '../types/Currency';

// Api requests
import { getCurrencies } from '../api/getCurrencies';

export const CurrencyContext = createContext<Currency[]>([]);

type Props = {
  children: ReactNode;
}

export const CurrencyProvider: FunctionComponent<Props> = ({ children }) => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    getCurrencies()
      .then(setCurrencies);
  }, []);

  return (
    <CurrencyContext.Provider value={currencies}>
      { children }
    </CurrencyContext.Provider>
  );
};
