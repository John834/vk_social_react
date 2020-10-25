import React from 'react';
import u from './User.module.css';

const User = () => {
  return (
    <div className={u.profile__user}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJifTXkGDuhTboeiMwQISmh-xjOTGMF9iWWg&usqp=CAU" alt="user"></img>
      <div className={u.profile__edit}>
        <button className={u.profile__btn}>Edit</button>
        <div className={u.profile__page}>...</div>
      </div>
    </div>
  )
}

export default User;