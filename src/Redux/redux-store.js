import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import friendReducer from './friend-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
	profile: profileReducer,
	message: messageReducer,
	friendPage: friendReducer,
	auth: authReducer
})

// восприменять как стейт

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store


export default store;