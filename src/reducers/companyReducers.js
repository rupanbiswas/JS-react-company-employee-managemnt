import {
  COMPANY_NAME_FAIL,
  COMPANY_NAME_REQUEST,
  COMPANY_NAME_SUCCESS,
  COMPANY_NAME_EMPTY,
  DELETE_FAIL,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_EMPTY,
} from '../constants/cons';

export const addCompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_NAME_REQUEST:
      return { loading: true };
    case COMPANY_NAME_SUCCESS:
      return { loading: false, company: action.payload };
    case COMPANY_NAME_FAIL:
      return { loading: false, error: action.payload };
    case COMPANY_NAME_EMPTY:
      return {};
    default:
      return state;
  }
};
export const deleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REQUEST:
      return { loading: true };
    case DELETE_SUCCESS:
      return { loading: false, success: true };
    case DELETE_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_EMPTY:
      return {};
    default:
      return state;
  }
};
