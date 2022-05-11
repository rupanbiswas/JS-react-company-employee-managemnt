import React, { useState, useEffect } from 'react';
import { createHashHistory } from 'history';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteDispatch, deleteEmpty } from '../actions/companyActions';

function DeleteComapany() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const history = createHashHistory();
  const [id, setId] = useState();

  const deleteSelector = useSelector((state) => state.delete);
  const { error, success } = deleteSelector;
  console.log(deleteSelector);
  useEffect(() => {
    console.log(success);
    if (success) {
      navigate('/');
      dispatch(deleteEmpty());
    }
    if (error) {
      alert('plese use different company name ,already deeted ;)');
    }
  }, [success, error, deleteSelector, history]);
  function submitHandler(e) {
    e.preventDefault();
    dispatch(deleteDispatch(id));
  }

  return (
    <>
      <h1>sorry for bad UI experience</h1>
      <h1>delete companyr</h1>
      <label>company id</label>
      <input
        type={'text'}
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>

      <button type='button' onClick={submitHandler}>
        submit
      </button>
    </>
  );
}
export default DeleteComapany;
