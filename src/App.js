import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// components
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Message from './components/Message/Message';
import Navigation from './components/Navigation/Navigation';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import News from './components/News/News';
import FriendContainer from './components/Friend/FriendContainer';

const App = (props) => {
  return (
    <div className="app__wrapper">
      <HeaderContainer />
      <Navigation />
   	<Route exact path="/profile/:userId?" render={() => <ProfileContainer store={props.store.profile} /> } />
    <Route exact path="/Message" render={() => <Message store={props.store.message}  /> } />
	<Route exact path="/News" render={() => <News /> } />
	<Route excat path="/Friend" render={() => <FriendContainer /> } />
    </div>
  );
}

export default App;
