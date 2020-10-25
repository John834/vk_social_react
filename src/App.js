import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';


const App = (props) => {
  return (
    <div className="app__wrapper">
      <Header />
      <Navigation />
        <Route exact path="/Profile" render={() => <Profile data={props.state.profile} imgData={props.state.profile} contData={props.state.profile} addPost={props.addPost} updatePost={props.updatePost} /> } />
        <Route exact path="/Message" render={() => <Message messData={props.state.message} /> } />
    </div>
  );
}

export default App;
