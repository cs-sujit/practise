import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import store from "./store";
import {Provider} from "react-redux";
import FirstComponent from "./FirstComponent"
import SecondComponent from "./SecondComponent"
store.subscribe(()=>console.log(store.getState()));
ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
    	<App />
      
      {/* <FirstComponent /> */}
      {/* <SecondComponent /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
