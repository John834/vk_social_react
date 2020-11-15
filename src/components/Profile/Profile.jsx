import React from 'react';
import pr from './Profile.module.css';


import UserInfo from './UserInfo/UserInfo';
import User from './User/User';
import MyPhoto from './MyPhoto/MyPhoto';
// import PostContent from './PostContent/PostContent';
import MyPostContainer from './MyPost/MyPostContainer';

import Preloader from '../common/preloader/preloader.jsx'


const Profile = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div className={pr.profile}>
      <User profile={props.profile} />
      <div className={pr.column}>
        <UserInfo data={props.store.countData} name="Ghloe" surname="Moretz" />
        <MyPhoto imgData={props.store.imageData} />
        <MyPostContainer />
      </div>
    </div>
  )
}

export default Profile;



//<PostContent contData={props.store.postsData} />
/*
contenteditable="true" */
