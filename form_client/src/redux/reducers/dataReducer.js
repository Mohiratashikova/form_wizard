import {
  SET_PAGE_ONE,
  SET_PAGE_TWO,
  LOADING_DATA,
  SUBMIT_USER,
  SET_ERRORS,
  GO_PAGE,
  UPDATE_USER,
  SET_PAGE_SUCCESS,
} from "../types";

const initialState = {
  page: "signup",
  loading: false,
  user: {},
  errorEmail: "",
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_PAGE_ONE:
      return {
        ...state,
        page: "message",
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case SET_PAGE_TWO:
      return {
        ...state,
        page: "checkbox",
      };
    case SUBMIT_USER:
      return {
        ...state,
        page: "signup",
        user: {},
      };
    case SET_ERRORS:
      return {
        ...state,
        errorEmail: action.payload.error,
      };
    case GO_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        page: "checkbox",
      };
    case SET_PAGE_SUCCESS:
      return {
        ...state,
        user: { messageDone: false },
        page: "success",
      };
    default:
      return state;
  }
};
