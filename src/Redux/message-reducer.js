const ADD_MESSAGE = "ADD-MESSAGE"

/*const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'*/


let initialState = {
	messageData: [
		{id: 1, name: 'Sylvester', surname: 'Stallone' },
		{id: 2, name: 'Matthew', surname: 'McConaughey' },
		{id: 3, name: 'Angelina', surname: 'Jolie' },
		{id: 4, name: 'Scarlett', surname: 'Johansson' },
	],
	sendMessageUserData: [
		{nameUser: "Ghloe", sendtime: "12:59 pm", messuser: "I was approved for the lead role the film"}
	],
	/*newSendMess: ''*/
}

const messageReducer = (state = initialState, action) => {
	// почему копию делать сверху опасно
	// reducer в попадаем каждый раз когда distpach action не касается редьюсера
	// то все равно сюда dispatch 
	// let stateCopy;  создаем объект и сразу возвращаем
	switch(action.type) {
		case ADD_MESSAGE:
			let newMess = {
		        nameUser: "Ghloe",
		        sendtime: "12:59 pm",
		        messuser: action.newMessageBody
	      	}	
			return {
				...state,
				/*newSendMess: '',*/
				sendMessageUserData: [...state.sendMessageUserData, newMess]
			}
	        /*stateCopy.sendMessageUserData.push(newMess)
	       	stateCopy.newSendMess = ''*/
	    	//return stateCopy

	    // Dia
	    /*case SEND_NEW_MESSAGE:
	    	return {
				...state,
				newSendMess: action.newText
			}*/


	    	/*stateCopy.newSendMess = action.newText*/
	   		//return stateCopy
	   	default: 
	   		return state
	}


	/*if(action.type === ADD_MESSAGE) {
      let newMess = {
        nameUser: "Ghloe",
        sendtime: "12:59 pm",
        messuser: state.newSendMess
      }
      state.sendMessageUserData.push(newMess)
      state.newSendMess = ''
    } else if(action.type === SEND_NEW_MESSAGE) {
        state.newSendMess = action.newText
    }*/

}


// mess 

export const addMessage = (newMessageBody) => ({
	type: ADD_MESSAGE,
 	newMessageBody
 })

/*export const updateAddNewMessage = (text) => ({
  type: SEND_NEW_MESSAGE,
  newText: text
})*/

export default messageReducer;


// this._state.message