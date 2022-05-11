import axios from 'axios';
import {
  USER_EMPTY,
  USER_FAIL,
  USER_REQUEST,
  USER_SUCCESS,
  LIST_FAIL,
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_BY_COMPANY_FAIL,
  LIST_BY_COMPANY_REQUEST,
  LIST_BY_COMPANY_SUCCESS,
  ALLOT_EMPTY,
  ALLOT_FAIL,
  ALLOT_SUCCESS,
  ALLOT_REQUEST,
} from '../constants/cons';

export const addUserDispatch = (name, email, phone) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REQUEST,
    });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    const { data } = await axios.post(
      'http://localhost:8000/api/V1/add-user',
      { name, email, phone },
      config
    );
    dispatch({
      type: USER_SUCCESS,
      payload: data,
    });
    localStorage.setItem('employeeInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const userEmpty = () => async (dispatch) => {
  dispatch({
    type: USER_EMPTY,
  });
};
export const allotDispatch = (employee_id, company_ids) => async (dispatch) => {
  try {
    dispatch({
      type: ALLOT_REQUEST,
    });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    const { data } = await axios.post(
      'http://localhost:8000/api/V1/allocate-user',
      { employee_id, company_ids },
      config
    );
    dispatch({
      type: ALLOT_SUCCESS,
      payload: data,
    });
    localStorage.setItem('employeeInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ALLOT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const allotEmpty = () => async (dispatch) => {
  dispatch({
    type: ALLOT_EMPTY,
  });
};

export const listByCompanyAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_BY_COMPANY_REQUEST,
    });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    const { data } = await axios.get(
      `http://localhost:8000/api/V1/users-by-company/${id}`,
      config
    );
    dispatch({
      type: LIST_BY_COMPANY_SUCCESS,
      payload: data,
    });
    localStorage.setItem('employeeInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LIST_BY_COMPANY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listAction = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_REQUEST,
    });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    const { data } = await axios.get(
      'http://localhost:8000/api/V1/list-users',
      config
    );
    dispatch({
      type: LIST_SUCCESS,
      payload: data,
    });
    localStorage.setItem('employeeInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
