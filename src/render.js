import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { addPost } from './Redux/state';
import { updateNewPostText } from './Redux/state';
import { BrowserRouter as Router } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
	  <React.StrictMode>
	    <Router>
	      <App state={state} addPost={addPost} updatePost={updateNewPostText} />
	    </Router>
	  </React.StrictMode>,
	  document.getElementById('root')
	);
}
