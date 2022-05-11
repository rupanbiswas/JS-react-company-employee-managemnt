import React, { useState, useEffect } from 'react';
import { createHashHistory } from 'history';
import {
  addCompnayDispatch,
  companyNmaeEmpty,
} from '../actions/companyActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddCompany() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const history = createHashHistory();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const companySelector = useSelector((state) => state.addCompany);
  const { error, company } = companySelector;
  useEffect(() => {
    if (company) {
      navigate('/');
      dispatch(companyNmaeEmpty());
    }
  }, [companySelector, error, history]);
  function submitHandler(e) {
    e.preventDefault();
    dispatch(addCompnayDispatch(name, city));
  }

  return (
    <>
      <h1>sorry for bad UI experience</h1>
      <h1>Add company</h1>
      <label>name</label>
      <input
        type={'text'}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <label>city</label>
      <input
        type={'text'}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></input>
      <button type='button' onClick={submitHandler}>
        submit
      </button>
    </>
  );
}
export default AddCompany;
