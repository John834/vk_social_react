// import React from 'react'
// import * as axios from 'axios'
// import Users from './Users'




class UsersAPIComponent extends React.Component {
	render() {
		return <Users totalUsersCount={this.props.totalUsersCount} 
		pageSize={this.props.pageSize} currentPage={this.props.currentPage} 
		onChanged={this.onChanged} users={this.props.users} 
		unfollow={this.props.unfollow} follow={this.props.follow} /> 
	}
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}
	onChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}
}


//export default UsersAPIComponent;

//     border: 2px solid #807f0073;