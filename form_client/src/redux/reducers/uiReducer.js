import { SET_ERRORS, CLEAR_ERRORS, LOADING_DATA } from "../types";

const initialState = {
  loading: false,
  errors: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
