import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { userListReducer, userRegisterReducer } from "./reducers/userReducers";
import { positionListReducer } from "./reducers/positionReducers";

const initialState = {
  // userSignin: {
  // 	userInfo: localStorage.getItem('userInfo')
  // 	  ? JSON.parse(localStorage.getItem('userInfo'))
  // 	  : null,
  //   }
};

const reducer = combineReducers({
  userList: userListReducer,
  userRegister: userRegisterReducer,
  positionList: positionListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
