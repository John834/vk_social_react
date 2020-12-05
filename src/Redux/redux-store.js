import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import friendReducer from './friend-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';

import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
	profile: profileReducer,
	message: messageReducer,
	friendPage: friendReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer,
})

// восприменять как стейт

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store


export default store;