import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import FriendContainer from './components/Friend/FriendContainer';

const App = (props) => {
  return (
    <div className="app__wrapper">
      <Header />
      <Navigation />
   	<Route exact path="/Profile" render={() => <Profile store={props.store.profile} /> } />
    <Route exact path="/Message" render={() => <Message store={props.store.message}  /> } />
	<Route exact path="/News" render={() => <News /> } />
	<Route excat path="/Friend" render={() => <FriendContainer /> } />
    </div>
  );
}

export default App;
