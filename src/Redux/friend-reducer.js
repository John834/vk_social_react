const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = 'SET_USERS'



let initialState  = {
	users: []
		/*{id: 1, fullName: 'Angelina Jolie', status: 'ert', online: 'online', followed: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSI8crFQF_esYysRSl8RkNEwFFgbJ2oUO19cQ&usqp=CAU" },
		{id: 2, fullName: 'Sylvester Stallone', status: 'et', online: 'online', followed: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyXFsHDhKN7g9a8dighFsR_ilFtR8CJoa_bQ&usqp=CAU"},
		{id: 3, fullName: 'Matthew McConaughey', status: 'et', online: 'online', followed: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWDd6jcFzHr7k3R9fokfDDyJEnH-A-IwlxtQ&usqp=CAU"},
		{id: 4, fullName: 'Scarlett Johansson', status: 'dsgsd', online: 'online', followed: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTC9lXIAjnKFUry4uHlHtfXYZO7lABgQN1MvA&usqp=CAU"},*/

}

const friendReducer = (state = initialState, action ) => {
	switch(action.type) {
		case FOLLOW: {
			return {
				...state, 
				users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
			}
	    }
      	case UNFOLLOW: {
      		return {
      			...state,
      			users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
      		}
      	}
      	case SET_USERS: {
      		return {
      			...state,
      			users: [...state.users, ...action.users]
      		}
      	}
      	default:
      		return state
	}

	return state
}


export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})


// откуда то придут юзеры
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default friendReducer;
