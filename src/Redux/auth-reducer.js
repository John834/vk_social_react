import { authAPI } from './../components/api/api.js';
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false, // loader
}

let authReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload,
			}
		}
		default: 
   			return state
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})





export const getAuthUserData = () => {
	return (dispatch) => {
		return authAPI.me()
			.then(data => {
				if(data.resultCode === 0) {
					let {id, email, login} = data.data
					dispatch(setAuthUserData(id, email, login, true))
				}
			}
		)
	}
}







// 78 

// login

export const Loginn = (email, password, rememberMe) => (dispatch) => {
	/*let action = stopSubmit('login', {_error: 'email или password неверны'})
		dispatch(action)*/
	authAPI.login(email, password, rememberMe)
	.then(data => {
		if(data.resultCode == 0) {
			dispatch(getAuthUserData())
		} else {
			// 79
			let message = data.messages.length > 0 ? data.messages[0] : "error in auth"
			dispatch(stopSubmit('login', {_error: message}))
		}
	})

}


// logout

export const Logout = () => (dispatch) => {
	authAPI.logout()
	.then(data => {
		if(data.resultCode == 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})

}


export default authReducer