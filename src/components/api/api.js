import * as axios from 'axios';


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	headers: {
		"API-KEY": '44a93e4b-ff35-44f5-bdc3-62c3e586105b'
	},
})


export const userIdAPI = {
	getUserId(userId)  {
		return instance.get(`profile/` + userId)
		.then(response => response.data)
	}
}

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)
	}
}

export const loginAPI = {
	getLoginUsers() {
		return instance.get(`auth/me`)
		.then(response => response.data)
	}
}

export const usersFollowedAPI = {
	follow(id) {
		return instance.delete(`follow/${id}`)
		.then(response => response.data)
	},
	unfollow(id) {
		return instance.post(`follow/${id}`)
		.then(response => response.data)
	}
}