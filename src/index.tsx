import React from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';

import App from './components/App';
// import App from "@/components/App";
import  "./styles/site.scss";

Modal.setAppElement('#app');

ReactDOM.render(<App/>, document.getElementById('app'));

// if (module.hot) { // enables hot module replacement if plugin is installed
//   module.hot.accept();
// }
