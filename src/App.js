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
import Login from './components/Login/Login.jsx';

const App = (props) => {
  return (
    <div className="app__wrapper">
      <HeaderContainer />
      <Navigation />
   	<Route exact path="/profile/:userId?" render={() => <ProfileContainer store={props.store.profile} /> } />
    <Route exact path="/Message" render={() => <Message store={props.store.message}  /> } />
	<Route exact path="/News" render={() => <News /> } />
	<Route exact path="/Friend" render={() => <FriendContainer /> } />
	<Route exact path="/login" render={() => <Login /> } />
    </div>
  );
}

export default App;
