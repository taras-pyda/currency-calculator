import { FunctionComponent } from 'react';

// Styles
import './App.scss';

// Components
import { Header } from './components/Header';
import { CurrencyCalculator } from './components/CurrencyCalculator';

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Header />

      <CurrencyCalculator />
    </div>
  );
};
