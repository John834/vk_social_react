import React from 'react';
import dia from './Dia.module.css';
import { NavLink } from 'react-router-dom';
//import { addNewMessage, updateAddNewMessage } from './../../../Redux/message-reducer';

const SendMessageUser = (props) => {
	return (
		<div className={dia.infoUser}>
			<NavLink className={dia.nameUser} to='/Profile'>{props.name}</NavLink>
			<span className={dia.sendtime}>{props.date}</span>
			<div className={dia.send}>{props.message}</div>
		</div>
		
	)
}

const Dia = (props) => {
	let sendMessageItem = props.mess.map((u, i) => <SendMessageUser name={u.nameUser} date={u.sendtime} message={u.messuser} key={`${u}_${i}`} /> )

	let newMessage = React.createRef()
	let onAddMessage = () => {
		props.addMessage()
	}
	let onMessageChange = () => {
		//let text = e.target.value
		let text = newMessage.current.value;
		props.updateAddNewMessage(text)
	}
	
	return (	
		<div className={dia.dialogsUsers}>
			<div className={dia.dialogTop}>
				<span className={dia.dialogTitle}>Sylvester</span>
			</div>
			<div className={dia.dialogCenter}>
				<div className={dia.sendwrapper}>
					{ sendMessageItem }
				</div>
			</div>
			<div className={dia.dialogBottom}>
				<textarea onChange={ onMessageChange } ref={newMessage} className={dia.addDialog} value={props.mess.newSendMess} placeholder="Write a message…"></textarea>
				<button onClick={ onAddMessage } className={dia.dialogbtn}>Add</button>
			</div>
		</div>
	)
}

export default Dia;