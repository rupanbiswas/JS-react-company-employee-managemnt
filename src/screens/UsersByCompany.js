import React, { useEffect, useState } from 'react';
import { createHashHistory } from 'history';

import { useDispatch, useSelector } from 'react-redux';
import { listAction, listByCompanyAction } from '../actions/userActions';

function UsersByCompany() {
  const dispatch = useDispatch();
  const history = createHashHistory();
  const [id, setId] = useState();

  const lists = useSelector((state) => state.listByCompany);
  function handleClick(e) {
    e.preventDefault();
    dispatch(listByCompanyAction(id));
  }
  return (
    <>
      <h1>sorry for bad UI experience</h1>
      <h1>List user by company</h1>
      <label>company id</label>
      <input
        type={'text'}
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>
      <button type='button' onClick={handleClick}>
        submit
      </button>
      <table>
        <tr>
          <th>user name,</th>
          <th>user phone,</th>
          <th>user email,</th>
        </tr>
        {lists?.error ? <>company not present</> : <></>}
        {lists ? (
          lists?.listsByCompany?.map((e) => {
            return (
              <tr>
                <td>{e.name},</td>
                <td>{e.phone},</td>
                <td>{e.email},</td>
              </tr>
            );
          })
        ) : (
          <>no data</>
        )}
      </table>
    </>
  );
}
export default UsersByCompany;
