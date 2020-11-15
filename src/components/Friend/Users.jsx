import React from 'react';
import fr from './Friend.module.css';
import userPhoto from './../../assets/image/user.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersFollowedAPI } from '../api/api';

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
	let pages = []
	for(let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div className={fr.users}>
			<div className={fr.pagination}>
				{pages.map(e => <span className={props.currentPage === e ? fr.select : fr.pa } onClick={() => { props.onChanged(e) }} key={`${e}`}>{e}</span> )}
			</div>
			<div className={fr.friendList}>
				{
					props.users.map(u => <div key={u.id}>
						<div className={fr.user}>
							<div className={fr.wrapper}>
								<div className={fr.photo}>
									<NavLink to={'/profile/' + u.id}>
										<img src={u.photos.small ? u.photos.small : userPhoto } alt="user" />
									</NavLink>
								</div>
								<div className={fr.userInfo}>
									<div className={fr.userfullName}>{u.name}</div>
									<div className={fr.status}>{u.status}</div>
									<div className={fr.message}>Write message</div>
								</div>
							</div>
							<div>
								<div className={fr.menu}>...</div>


								{ 
									u.followed 

									? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
										props.toggleFollowingProgress(true, u.id)
										usersFollowedAPI.follow(u.id)
											.then(data => {
												if(data.resultCode === 0) {
													props.unfollow(u.id)
												}
												props.toggleFollowingProgress(false, u.id)
											})
										

										}}>unfollow</button>

									: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
										props.toggleFollowingProgress(true, u.id)
										usersFollowedAPI.unfollow(u.id)
											.then(data => {
												if(data.resultCode === 0) {
													props.follow(u.id)
												}
												props.toggleFollowingProgress(false, u.id)
											})

										}}>follow</button>
								}


							</div>
						</div>
					</div>)
				}
			</div>
		</div>
	)
}

export default Users;