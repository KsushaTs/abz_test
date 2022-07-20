import Axios from 'axios';

import {
	POSITION_LIST_FAIL,
	POSITION_LIST_REQUEST,
	POSITION_LIST_SUCCESS
} from "../constants/positionConstants";

export const positionListAction =
	() =>
	async (dispatch) => {
		dispatch({
			type: POSITION_LIST_REQUEST,
		});
		try {
			const {
				data
			} = await Axios.get(
				`https://frontend-test-assignment-api.abz.agency/api/v1/positions`
			);

			dispatch({
				type: POSITION_LIST_SUCCESS,
				payload: data
			});

		} catch (error) {
			dispatch({
				type: POSITION_LIST_FAIL,
				payload: error.response && error.response.data.message ?
					error.response.data.message :
					error.message
			});

		}
	};