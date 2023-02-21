import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import 'assets/css/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);