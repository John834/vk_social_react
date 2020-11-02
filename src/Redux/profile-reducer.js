const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"



let initialState  = {
	countData: [
		{count: 80, label: 'friends'},
		{count: 840231, label: 'followers'},
		{count: 4, label: 'photos'},
		{count: 0, label: 'videos'},
		{count: 0, label: 'gifts'},
		{count: 20, label: 'tracks'},
	],
	imageData: [
		{src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwuv6WYHNdq9u5H31Y9r6t3rlzTp0ttgjSVg&usqp=CAU", alt: "photo"},
		{src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd2m9KKQw7mmq1FUIe5T2uP6OLTMXu_9yoJw&usqp=CAU", alt: "photo"},
		{src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzIxbHIZxVLw2oe7AgdoMBbfuRhqMlZWKOfA&usqp=CAU", alt: "photo"},
		{src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3HrDB0gl-WDIrut-0gib0XxQDfXqbMRQpIQ&usqp=CAU", alt: "photo"},
	],
	postsData: [
		/*{name: "Ghloe", surname: 'Moretz', info: 'что то то ав рпв', like: 32232},
		{name: "Ghloe", surname: 'Moretz', info: 'что то то ав рпв', like: 32141},
		{name: "Ghloe", surname: 'Moretz', info: 'что то то ав рпв', like: 45335},*/
	],
	newPostText: 'I will star in a new film'
}

const profileReducer = (state = initialState, action ) => {
	switch(action.type) {
		case ADD_POST: {
			let newPost = {
		        name: "Ghloe",
		        surname: "Moretz",
		        info: state.newPostText,
		        like: 0,
	      	}
	      	return {
	      		...state,
	      		postsData: [...state.postsData, newPost],
	      		newPostText: '',

	      	}
	      	/*let stateCopy = {...state}*/
	      	/*state.postsData.push(newPost)*/
	      	/*stateCopy.postsData = [...state.postsData]
	      	stateCopy.postsData.push(newPost)
	      	stateCopy.newPostText = ''*/
	      	/*return stateCopy*/
	    }
      	case UPDATE_NEW_POST_TEXT: {
      		/*state.newPostText = action.newText*/
      		return {
      			...state,
      			newPostText: action.newText
      		}
      		/*let stateCopy = {...state}
      		stateCopy.newPostText = action.newText*/
      		/*return stateCopy*/
      	}
      	default:
      		return state
	}

	/*if(action.type === ADD_POST) {
      let newPost = {
        name: "Ghloe",
        surname: "Moretz",
        info: state.newPostText,
        like: 0,
      }
      state.postsData.push(newPost)
      state.newPostText = ''
    } else if(action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    } */


	return state
}


export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT, 
  newText: text,
})


export default profileReducer;

// this._state.profile