import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Dashboard from './components/Dashboard';

ReactDOM.render(
  <BrowserRouter>
    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
    <Routes>
      <Route exact path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
