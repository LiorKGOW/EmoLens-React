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
import IndexPage from './pages/IndexPage';
import NavBar from './NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <NavBar />
    <Routes id="page-body">
      <Route path="/" element={<IndexPage />} exact />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
