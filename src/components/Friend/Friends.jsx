//import React from 'react'
//import fr from './Friend.module.css';
///import * as axios from 'axios'
//import userPhoto from './../../assets/image/user.jpg';

const Friend = (props) => {
	let getUsers = () => {
		if(props.users.length === 0) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
			.then(response => {
				props.setUsers(response.data.items)
			})
		}
	}
	return (
		<div className={fr.users}>
			<button onClick={getUsers}>get users</button>
			<div className={fr.friendList}>
				{
					props.users.map(u => <div key={u.id}>
						<div className={fr.user}>
							<div className={fr.wrapper}>
								<div className={fr.photo}>
									<img src={u.photos.small ? u.photos.small : userPhoto } alt="user" />
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
									? <button onClick={() => (props.unfollow(u.id))}>unfollow</button> 
									: <button onClick={() => {props.follow(u.id)}}>follow</button>
								}
							</div>
						</div>
					</div>)
				}
			</div>
		</div>
	)
}

export default Friend;


/* 
[
	{id: 1, fullName: 'Angelina Jolie', status: 'ert', online: 'online', followed: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSI8crFQF_esYysRSl8RkNEwFFgbJ2oUO19cQ&usqp=CAU" },
	{id: 2, fullName: 'Sylvester Stallone', status: 'et', online: 'online', followed: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyXFsHDhKN7g9a8dighFsR_ilFtR8CJoa_bQ&usqp=CAU"},
	{id: 3, fullName: 'Matthew McConaughey', status: 'et', online: 'online', followed: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWDd6jcFzHr7k3R9fokfDDyJEnH-A-IwlxtQ&usqp=CAU"},
	{id: 4, fullName: 'Scarlett Johansson', status: 'dsgsd', online: 'online', followed: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTC9lXIAjnKFUry4uHlHtfXYZO7lABgQN1MvA&usqp=CAU"},
]
*/