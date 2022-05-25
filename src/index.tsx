import ReactDOM from 'react-dom/client';
import './index.scss';
import { CurrencyProvider } from './contexts/CurrencyProvider';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CurrencyProvider>
    <App />
  </CurrencyProvider>
);
