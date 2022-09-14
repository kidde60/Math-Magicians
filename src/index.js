import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './components/Calculator';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
);
