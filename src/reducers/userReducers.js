import {
  USER_FAIL,
  USER_REQUEST,
  USER_SUCCESS,
  USER_EMPTY,
  ALLOT_FAIL,
  ALLOT_REQUEST,
  ALLOT_SUCCESS,
  ALLOT_EMPTY,
  LIST_FAIL,
  LIST_SUCCESS,
  LIST_REQUEST,
  LIST_BY_COMPANY_FAIL,
  LIST_BY_COMPANY_SUCCESS,
  LIST_BY_COMPANY_REQUEST,
} from '../constants/cons';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { loading: true };
    case USER_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_FAIL:
      return { loading: false, error: action.payload };
    case USER_EMPTY:
      return {};
    default:
      return state;
  }
};
export const allotUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ALLOT_REQUEST:
      return { loading: true };
    case ALLOT_SUCCESS:
      return { loading: false, allot: action.payload };
    case ALLOT_FAIL:
      return { loading: false, error: action.payload };
    case ALLOT_EMPTY:
      return {};
    default:
      return state;
  }
};
export const ListReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_REQUEST:
      return { loading: true };
    case LIST_SUCCESS:
      return { loading: false, lists: action.payload };
    case LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const listByCompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_BY_COMPANY_REQUEST:
      return { loading: true };
    case LIST_BY_COMPANY_SUCCESS:
      return { loading: false, listsByCompany: action.payload };
    case LIST_BY_COMPANY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
