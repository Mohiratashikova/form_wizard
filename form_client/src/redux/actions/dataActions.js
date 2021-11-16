import {
  LOADING_DATA,
  SET_PAGE_ONE,
  SET_ERRORS,
  CLEAR_ERRORS,
  GO_PAGE,
  UPDATE_USER,
  SET_PAGE_SUCCESS,
} from "../types";

import axios from "axios";

export const checkEmail = (user) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  const email = user.email;
  axios
    .get("/users", { params: { email } })
    .then(() => {
      dispatch({
        type: CLEAR_ERRORS,
        payload: [],
      });
      dispatch({
        type: SET_PAGE_ONE,
        payload: user,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const pageChange = (page) => {
  return {
    type: GO_PAGE,
    payload: page,
  };
};

export const updateMessage = (message, choice) => {
  return {
    type: UPDATE_USER,
    payload: { message, choice, messageDone: true },
  };
};

export const updateCheckbox = (choicePicture, choice2) => (dispatch) => {
  dispatch({
    type: UPDATE_USER,
    payload: { choicePicture, choice2, checkboxDone: true },
  });
  dispatch(pageChange("summary"));
};

export const submitUser = (user) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post("/signup", { ...user })
    .then(() => {
      dispatch({
        type: CLEAR_ERRORS,
        payload: [],
      });
      dispatch({
        type: SET_PAGE_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
