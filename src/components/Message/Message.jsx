import React from 'react';
import me from './Message.module.css';
import { NavLink } from 'react-router-dom';


const UserDialog = (props) => {
  let path = '/Message/' + props.id
  return (
    <NavLink to={path}>
      <li className={me.dialog}>
        <div className={me.dialog__photo}>
          <img src="http://placehold.it/50x50" alt="user" />
        </div>
        <div className={me.content}>
          <span>{props.name} {props.surname}</span>
        </div>
      </li>
    </NavLink>
  )
}

/* const Dia = () => {
  return (
    <div className={me.dialoggg}>
      jkhjk
    </div>
  )
} */

const Message = (props) => {
  let messageItems = props.messData.messageData.map((mess, index) => <UserDialog name={mess.name} surname={mess.surname} id={mess.id} key={`${mess}_${index}`} /> )
  return (
    <div className={me.message}>
      <div className={me.dialogs}>
        <ul>
          { messageItems }
        </ul>
      </div>
      <div className={me.message__menu}></div>
    </div>
  )
}

export default Message;