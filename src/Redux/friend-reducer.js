const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = 'SET_USERS'

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState  = {
	users: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
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
      			users: action.users,
      		}
      	}
      	case SET_CURRENT_PAGE: {
      		return {...state, currentPage: action.currentPage}
      	}
      	case SET_TOTAL_USERS_COUNT: {
      		return {...state, totalUsersCount: action.count}
      	}
      	case TOGGLE_IS_FETCHING: {
      		return {...state, isFetching: action.isFetching}
      	}
      	case TOGGLE_IS_FOLLOWING_PROGRESS: {
      		return {
      			...state, 
      			followingInProgress: action.isFetching 
      			? [...state.followingInProgress, action.userId]
      			: state.followingInProgress.filter(id => id != action.userId)
      		}
      	}
      	default:
      		return state
	}

	return state
}


export const follow = (userId) => ({type: FOLLOW, userId})

export const unfollow = (userId) => ({type: UNFOLLOW, userId})


// откуда то придут юзеры
export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export default friendReducer;
