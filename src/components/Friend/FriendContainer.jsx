import React from 'react'
import Friend from './Friend';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from './../../Redux/friend-reducer';
// FriendContainer

let mapStateToProps = (state) => {
	return {
		users: state.friendPage.users
	}
}

let mapDispacthToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}

// которая нужен для того чтобы передавать дочерние 
// презентаионной компоненте через props колбэки 
// какие то функции которые будут как презентация функция будет вызывать

export default connect(mapStateToProps, mapDispacthToProps)(Friend);