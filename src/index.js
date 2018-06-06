import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/Shared/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
import './styles/css/main.css';

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </HashRouter>,
  document.getElementById('root')
);

registerServiceWorker();
