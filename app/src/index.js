import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const getBaseUrl = () => {
  let isProd = false;
  if(isProd) {
    return '{productionApp}'
  } else {
    return 'http://localhost:8080/'
  }
};

export default getBaseUrl();