import Axios from 'axios';

import {
	USER_LIST_FAIL,
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,

	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS
} from "../constants/userConstants";

export const userListAction =
	({
		page = 1,
		count = 6
	}) =>
	async (dispatch) => {
		dispatch({
			type: USER_LIST_REQUEST,
		});
		try {
			const {
				data
			} = await Axios.get(
				`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`
			);

			dispatch({
				type: USER_LIST_SUCCESS,
				payload: data
			});

		} catch (error) {
			dispatch({
				type: USER_LIST_FAIL,
				payload: error.response && error.response.data.message ?
					error.response.data.message :
					error.message
			});

		}
	};

export const register = (formData) => async (dispatch) => {

	dispatch({
		type: USER_REGISTER_REQUEST
	});
	try {

		const {
			data
		} = await Axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token');

		const response = await Axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users', formData, {
			headers: {
				'Token': data.token
			}
		});

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: response.data
		});

		//   localStorage.setItem('userInfo', JSON.stringify(response.data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.response && error.response.data.message ?
				error.response.data.message :
				error.message,
		});
	}
};