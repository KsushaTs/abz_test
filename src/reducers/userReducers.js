import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_RESET,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const userListReducer = (
  state = {
    loading: true,
    users: [],
  },
  action
) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        users:
          action.payload.page === 1
            ? action.payload.users
            : [...state.users, ...action.payload.users],
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    case USER_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_LIST_RESET:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (
  state = {
    loading: true,
    success: false,
  },
  action
) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        userInfo: action.payload.user_id,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
