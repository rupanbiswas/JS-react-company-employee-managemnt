import React, { useState, useEffect } from 'react';
import { createHashHistory } from 'history';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allotDispatch, allotEmpty } from '../actions/userActions';

function AllotUser() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const history = createHashHistory();
  const [userId, setUserId] = useState('');
  const [companyId, setCompanyId] = useState('');
  const allotU = useSelector((state) => state.allotUser);
  const { error, allot } = allotU;
  useEffect(() => {
    if (allot) {
      navigate('/');
      dispatch(allotEmpty());
    }
    if (error) {
      alert(error, 'company already present');
      dispatch(allotEmpty());
    }
  }, [allotU, error, history]);

  function submitHandler(e) {
    e.preventDefault();
    let companyIds = companyId.split(',');
    console.log(userId);
    dispatch(allotDispatch(userId, companyIds));
  }

  return (
    <>
      <h1>sorry for bad UI experience</h1>
      <h1>Add user</h1>
      <label>user_ID</label>
      <input
        type={'text'}
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      ></input>
      <label>company id ,for multiple ids use coma "," between ids</label>
      <input
        type={'text'}
        onChange={(e) => {
          setCompanyId(e.target.value);
        }}
      ></input>
      <button type='button' onClick={submitHandler}>
        submit
      </button>
    </>
  );
}
export default AllotUser;
