import React, { Component } from 'react';
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
import { initializeApp } from './Redux/app-reducer.js';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Preloader from './components/common/preloader/preloader'



class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if(!this.props.initialized) {
      <Preloader />
    } 

    return (
      <div className="app__wrapper">
        <HeaderContainer />
        <Navigation />
        <Route exact path="/profile/:userId?" render={() => <ProfileContainer store={this.props.store.profile} /> } />
        <Route exact path="/Message" render={() => <Message store={this.props.store.message}  /> } />
        <Route exact path="/News" render={() => <News /> } />
        <Route exact path="/Friend" render={() => <FriendContainer /> } />
        <Route exact path="/login" render={() => <Login /> } />
      </div>
    );
  }
}


const mapStateToProps = state => {
  const { initialized } = state.app
  return {
    initalized: initialized
  }
}




export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))
(App)