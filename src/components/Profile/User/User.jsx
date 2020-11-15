import React from 'react';
import u from './User.module.css';

const User = (props) => {
  return (
  	<div>
	    <div className={u.profile__user}>
	      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJifTXkGDuhTboeiMwQISmh-xjOTGMF9iWWg&usqp=CAU" alt="user"></img>
	      <div className={u.profile__edit}>
	        <button className={u.profile__btn}>Edit</button>
	        <div className={u.profile__page}>...</div>
	      </div>
	    </div>
	    <div className={u.friend}>
	    	<img src={props.profile.photos.small} alt="friend" />
	    	<div className={u.name}>{props.profile.fullName}</div>
	    </div>
	</div>
  )
}

export default User;