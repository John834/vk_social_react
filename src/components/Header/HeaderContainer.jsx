import React, { Component }  from 'react';
import Header from './Header.jsx'; 
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../Redux/auth-reducer.js';
import { loginAPI } from '../api/api';

class HeaderContainer extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		loginAPI.getLoginUsers()
			.then(data => {
				if(data.resultCode === 0) {
					let {id, email, login} = data.data
					this.props.setAuthUserData(id, email, login)
				}
			})
	}
	render() {
		return <Header {...this.props} />
	}
} 

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)