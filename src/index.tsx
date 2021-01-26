import React from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';
import { Provider } from "react-redux";

import App from './components/App';

import { store } from './store/store';

import  "./styles/site.scss";
import "./services/api/interceptors/errorsInterceptor"


Modal.setAppElement('#app');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('app'));

// if (module.hot) { // enables hot module replacement if plugin is installed
//   module.hot.accept();
// }
