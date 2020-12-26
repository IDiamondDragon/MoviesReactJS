import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
// import App from "@/components/App";
import  "./styles/site.scss";

ReactDOM.render(<App/>, document.getElementById('app'));

// if (module.hot) { // enables hot module replacement if plugin is installed
//   module.hot.accept();
// }
