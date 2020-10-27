import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';



import store from './Redux/state'

let rerenderEntireTree = (state) => {
	ReactDOM.render(
	  <React.StrictMode>
	    <Router>
	      <App state={state} dispatch={store.dispatch.bind(store) } />
	    </Router>
	  </React.StrictMode>,
	  document.getElementById('root')
	);
}


rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)




// api   