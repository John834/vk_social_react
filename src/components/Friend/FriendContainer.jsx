import React from 'react'
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers} from './../../Redux/friend-reducer';
// FriendContainer
import Users from './Users';
import fr from './Friend.module.css';
import Preloader from './../common/preloader/preloader.jsx';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux'

class UsersContainer extends React.Component {
	render() {
		return <> 
		{this.props.isFetching ? <Preloader /> : null }

		<Users 
			totalUsersCount={this.props.totalUsersCount} 
			pageSize={this.props.pageSize} 
			currentPage={this.props.currentPage} 
			onChanged={this.onChanged} 
			users={this.props.users} 
			unfollow={this.props.unfollow} 
			follow={this.props.follow} 
			toggleFollowingProgress={this.props.toggleFollowingProgress}
			followingInProgress={this.props.followingInProgress}
		/>
		</> 
	}
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
		


		/* this.props.toggleIsFetching(true)

		usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
				this.props.setTotalUsersCount(data.totalCount)
		}) 
				friend-reducer
		*/  




	}
	onChanged = (pageNumber) => {

		this.props.getUsers(pageNumber, this.props.pageSize)





		/*
		
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)

		usersAPI.getUsers(pageNumber, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
		})

		*/




	}
}





let mapStateToProps = (state) => {
	let a = state.friendPage
	return {
		users: a.users,
		pageSize: a.pageSize,
		totalUsersCount: a.totalUsersCount,
		currentPage: a.currentPage,
		isFetching: a.isFetching,
		followingInProgress: a.followingInProgress
	}
}





/* let mapDispacthToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingAC(isFetching))
		}
	}
} 


*/



/*

// внизу это тотже, но укороченный 

// которая нужен для того чтобы передавать дочерние 
// презентаионной компоненте через props колбэки 
// какие то функции которые будут как презентация функция будет вызывать

export default connect(mapStateToProps, 
	{ 
		follow, 
		unfollow, 
		setCurrentPage, 
		toggleFollowingProgress,
		getUsers
		// setUsers, 
		// setTotalUsersCount, 
		// toggleIsFetching, 
		// thunk
	})
	(UsersContainer);

*/

export default compose(
	connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}),
	withAuthRedirect
)(UsersContainer)