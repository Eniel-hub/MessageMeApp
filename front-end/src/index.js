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
import Register from './components/Register'
import Login from './components/Login'

ReactDOM.render(
  <BrowserRouter>
    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
    <Routes>
      <Route exact path="/" element={<App />}>
        {/* <Navigate replace to="/login"></Navigate> */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
