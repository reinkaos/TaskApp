import { isAction } from "redux";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, isAction) => {
  switch (isAction.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: true, userInfo: isAction.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: isAction.payload };

    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, isAction) => {
  switch (isAction.type) {
    case USER_REGISTRATION_REQUEST:
      return { loading: true };
    case USER_REGISTRATION_SUCCESS:
      return { loading: false, userInfo: isAction.payload };
    case USER_REGISTRATION_FAIL:
      return { loading: false, error: isAction.payload };
    default:
      return state;
  }
};
