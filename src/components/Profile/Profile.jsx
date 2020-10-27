import React from 'react';
import pr from './Profile.module.css';


import UserInfo from './UserInfo/UserInfo';
import User from './User/User';
import MyPhoto from './MyPhoto/MyPhoto';
import MyPost from './MyPost/MyPost';
import PostContent from './PostContent/PostContent';


const Profile = (props) => {
  return (
    <div className={pr.profile}>
      <User />
      <div className={pr.column}>
        <UserInfo data={props.data} name="Ghloe" surname="Moretz" />
        <MyPhoto imgData={props.imgData} />
        <MyPost dispatch={props.dispatch} newPostText={props.data.newPostText} />
        <PostContent contData={props.contData} />
      </div>
    </div>
  )
}

export default Profile;

/*
contenteditable="true" */
