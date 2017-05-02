/* 
  ./dev/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './js/store';


import Layout from './js/components/Layout.jsx';

require('./styles/reset.css');
require('./styles/style.styl');

const bodyWrapperEl = document.getElementById('body-wrapper');

ReactDOM.render((
  <Provider store={store}>
    <Layout/>
  </Provider>
  ), bodyWrapperEl);

if (module.hot) {
  module.hot.accept();
}