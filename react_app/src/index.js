import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import "@patternfly/react-core/dist/styles/base.css";
import reportWebVitals from './reportWebVitals';

import { HOME_ROUTE, LOGIN_ROUTE, LOGIN_FORGOT_ROUTE, ACCOUNT_CREATE_ROUTE } from './RouteConstants';

import IndexPage from './pages/IndexPage';
import Login from './pages/Login';
import ForgotLoginPage from './pages/ForgotLoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path={HOME_ROUTE} element={<IndexPage />} exact />
      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route path={LOGIN_FORGOT_ROUTE} element={<ForgotLoginPage />} />
      <Route path={ACCOUNT_CREATE_ROUTE} element={<CreateAccountPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
