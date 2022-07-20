import {
  POSITION_LIST_FAIL,
  POSITION_LIST_REQUEST,
  POSITION_LIST_SUCCESS,
} from "../constants/positionConstants";

export const positionListReducer = (
  state = { loading: true, positions: [] },
  action
) => {
  switch (action.type) {
    case POSITION_LIST_REQUEST:
      return { ...state, loading: true };
    case POSITION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        positions: action.payload.positions,
      };
    case POSITION_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
