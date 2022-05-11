import React, { useState, useEffect } from 'react';
import { createHashHistory } from 'history';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUserDispatch, userEmpty } from '../actions/userActions';

function AddUser() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const history = createHashHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const userSelector = useSelector((state) => state.user);
  const { error, user } = userSelector;
  useEffect(() => {
    if (user) {
      navigate('/');
      dispatch(userEmpty());
    }
  }, [userSelector, error, history]);
  function submitHandler(e) {
    e.preventDefault();
    dispatch(addUserDispatch(name, email, phone));
  }

  return (
    <>
      <h1>sorry for bad UI experience</h1>
      <h1>Add user</h1>
      <label>name</label>
      <input
        type={'text'}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <label>email</label>
      <input
        type={'text'}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <label>phone</label>
      <input
        type={'text'}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      ></input>
      <button type='button' onClick={submitHandler}>
        submit
      </button>
    </>
  );
}
export default AddUser;
