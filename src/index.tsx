import React from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import  "./styles/site.scss";

import App from './components/App';

import { configureStore, RootState } from './store/store';

import "./services/api/interceptors/errorsInterceptor"

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/ban-types
    INITIAL_STATE_REDUX: RootState;
  }
}

Modal.setAppElement('#app');

const entryBlock = document.getElementById('app');
const renderFunction: ReactDOM.Renderer = entryBlock?.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render

renderFunction(
  <Provider store={configureStore(false, window.INITIAL_STATE_REDUX)}>
    <BrowserRouter>
      <App lazyLoaded />
    </BrowserRouter>
  </Provider>, 
  entryBlock
);

// if (module.hot) { // enables hot module replacement if plugin is installed
//   module.hot.accept();
// }
