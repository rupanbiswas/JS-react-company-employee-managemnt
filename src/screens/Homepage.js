import React from 'react';
// import { createHashHistory } from 'history';
// import { browserHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  //   const history = createHashHistory();

  return (
    <>
      <h1>sorry for bad UI experience</h1>
      <button
        type='button'
        onClick={() => {
          navigate('/addCompany');
        }}
      >
        add company
      </button>
      <button
        type='button'
        onClick={() => {
          navigate('/addUser');
        }}
      >
        add user
      </button>
      <button
        type='button'
        onClick={() => {
          navigate('/deleteCompany');
        }}
      >
        delete company
      </button>
      <button
        type='button'
        onClick={() => {
          navigate('/listUsers');
        }}
      >
        list users and their companies
      </button>
      <button
        type='button'
        onClick={() => {
          navigate('/usersByCompany');
        }}
      >
        get users by company
      </button>
      <button
        type='button'
        onClick={() => {
          navigate('/allots');
        }}
      >
        allocate user to companies
      </button>
    </>
  );
}

export default Homepage;
