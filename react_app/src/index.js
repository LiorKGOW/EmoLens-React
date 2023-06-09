import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
// import "@patternfly/react-core/dist/styles/base.css";
import reportWebVitals from './reportWebVitals';

// Pages :
import Gallery from './pages/Gallery';
import EmptyPage from './pages/EmptyPage';

import { HOME_ROUTE, PROFILE_ROUTE, ABOUT_ROUTE } from './RouteConstants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path={HOME_ROUTE} element={<Gallery />} exact />
      <Route path={PROFILE_ROUTE} element={<EmptyPage />} exact />
      <Route path={ABOUT_ROUTE} element={<EmptyPage />} exact />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
