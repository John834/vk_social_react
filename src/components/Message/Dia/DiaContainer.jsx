import React from 'react';
import { addMessage /* updateAddNewMessage */ } from './../../../Redux/message-reducer';
import Dia from './Dia';
import { compose } from 'redux'

import { connect } from 'react-redux';

import { withAuthRedirect } from '../../../hoc/withAuthRedirect.js'

//const DiaContainer = (props) => {
	/*let state = props.store.getState().message
	let addMessage = () => {
		props.store.dispatch(addNewMessage())
	}
	let onMessageChange = (text) => {
		props.store.dispatch(updateAddNewMessage(text))
	}


	return (	
		<Dia 
			addMessage={addMessage} 
			updateAddNewMessage={onMessageChange} 
			mess={state}
		/>

		
	) 

	export default DiaContainer;
	
} */
	
		// connect


let mapStateToProps = (state) => {
	return {
		mess: state.message.sendMessageUserData,
	}
}

/*let mapDispatchToProps = (dispatch) => {
	return {
		updateAddNewMessage: (text) => {
			dispatch(updateAddNewMessage(text))
		},
		addMessage: () => {
			dispatch(addNewMessage())
		}
	}
} */

// const profileRedirectComponent = withAuthRedirect(Dia)
// hoc






// compose

/*
compose(
	withAuthRedirect
)(Dia)

// функция compose авто возметь Dia
// и закинет вызов withAuthRedirect

const DiaContainer = connect(mapStateToProps, {
		updateAddNewMessage,
		addMessage,
	})(Dia)



export default DiaContainer;

*/


export default compose(
	connect(mapStateToProps, { /* updateAddNewMessage, */ addMessage }),
	withAuthRedirect
)(Dia)