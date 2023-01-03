import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  HashRouter as Router,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HomePage } from 'pages/HomePage';
import { Catalogue } from 'pages/Catalogue/Catalogue';
import { About } from 'pages/About/About';
import { Favorites } from 'pages/Favorites/Favorites';
import { Auth } from 'pages/Auth/Auth';
import { Cart } from 'pages/Cart/Cart';
import { DetailPage } from 'pages/DetailPage/DetailPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="catalogue">
          <Route index element={<Catalogue />} />
          <Route path=":id" element={<DetailPage />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="auth" element={<Auth />} />
        <Route path="cart" element={<Cart />} />
        <Route path="home" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </Router>
  
);

reportWebVitals();
