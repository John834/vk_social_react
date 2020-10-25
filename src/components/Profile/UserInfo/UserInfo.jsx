import React from 'react';
import UserCount from './UserCount/UserCount';

import us from './UserInfo.module.css';

const UserInfo = (props) => {
  return (
    <div className={us.profile__info}>
      <div className={us.profile__wrap}>
        <div className={us.profile__top}>
          <div className={us.profile__wrapper}>
            <h1 className={us.profile__name}>{props.name} {props.surname}</h1>
            <span className={us.profile__online}>Online</span>
            </div>
          <div className={us.profile__status}><span>set a status message</span></div>
        </div>
        <div className={us.info}>
          <div className={us.info__wrapper}>
            <div className={us.info__b}>Birthday:</div>
            <div className={us.info__data}>February 10, 1997</div>
          </div>
        </div>
      </div>
      <UserCount data={props.data}/>
    </div>
  )
}

export default UserInfo;
