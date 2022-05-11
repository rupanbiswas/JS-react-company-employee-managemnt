import axios from 'axios';
import {
  COMPANY_NAME_EMPTY,
  COMPANY_NAME_FAIL,
  COMPANY_NAME_REQUEST,
  COMPANY_NAME_SUCCESS,
  DELETE_EMPTY,
  DELETE_FAIL,
  DELETE_REQUEST,
  DELETE_SUCCESS,
} from '../constants/cons';

export const addCompnayDispatch = (name, city) => async (dispatch) => {
  try {
    dispatch({
      type: COMPANY_NAME_REQUEST,
    });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    const { data } = await axios.post(
      'http://localhost:8000/api/V1/add-company',
      { name, city },
      config
    );
    dispatch({
      type: COMPANY_NAME_SUCCESS,
      payload: data,
    });
    localStorage.setItem('employeeInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: COMPANY_NAME_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const companyNmaeEmpty = () => async (dispatch) => {
  dispatch({
    type: COMPANY_NAME_EMPTY,
  });
};

export const deleteDispatch = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_REQUEST,
    });
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    const { data } = await axios.delete(
      `http://localhost:8000/api/V1/delete-company/${id}`,
      config
    );
    dispatch({
      type: DELETE_SUCCESS,
      payload: data,
    });
    localStorage.setItem('employeeInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteEmpty = () => async (dispatch) => {
  dispatch({
    type: DELETE_EMPTY,
  });
};
