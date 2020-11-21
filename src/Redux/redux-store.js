import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import friendReducer from './friend-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
	profile: profileReducer,
	message: messageReducer,
	friendPage: friendReducer,
	auth: authReducer,
	form: formReducer,
})

// восприменять как стейт

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store


export default store;