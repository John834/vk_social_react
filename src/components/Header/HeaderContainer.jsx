import React, { Component }  from 'react';
import Header from './Header.jsx'; 
import { connect } from 'react-redux';
import { getAuthUserData, Logout } from '../../Redux/auth-reducer.js';

class HeaderContainer extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.getAuthUserData()
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

export default connect(mapStateToProps, {getAuthUserData, Logout})(HeaderContainer)