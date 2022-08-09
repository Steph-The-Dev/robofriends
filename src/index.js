import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList';
import { robots } from './robots'
import 'tachyons';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>
);

// ReactDOM.render(<Card />, document.getElementById('root'));

reportWebVitals();