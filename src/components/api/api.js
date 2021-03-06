import * as axios from 'axios';


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	headers: {
		"API-KEY": '44a93e4b-ff35-44f5-bdc3-62c3e586105b'
	},
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)
	},
	follow(id) {
		return instance.delete(`follow/${id}`)
		.then(response => response.data)
	},
	unfollow(id) {
		return instance.post(`follow/${id}`)
		.then(response => response.data)
	},
	getProfile(userId) {
		console.warn('sgsdgf')
		return profileAPI.getProfile(userId)
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId)
		.then(response => response.data)
	},
	getStatus(userId) {
		return instance.get('profile/status/' + userId)
	},
	updateStatus(status) {
		return instance.put('profile/status', { status: status })
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
		.then(response => response.data)
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, {email, password, rememberMe})
		.then(response => response.data)
	},
	logout() {
		return instance.delete(`auth/login`)
		.then(response => response.data)
	}
}
