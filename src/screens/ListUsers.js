import React, { useEffect } from 'react';
import { createHashHistory } from 'history';

import { useDispatch, useSelector } from 'react-redux';
import { listAction } from '../actions/userActions';

function ListUsers() {
  const dispatch = useDispatch();
  const history = createHashHistory();

  const listUserSelector = useSelector((state) => state.list);
  const { error, lists } = listUserSelector;
  useEffect(() => {
    dispatch(listAction());
  }, []);
  return (
    <>
      <h1>sorry for bad UI experience</h1>
      <h1>List user</h1>
      <table>
        <tr>
          <th>user name,</th>
          <th>user phone,</th>
          <th>user email,</th>
          <th>company name,</th>
          <th>company city</th>
        </tr>
        {lists ? (
          lists.map((e) => {
            return (
              <tr>
                <td>{e.name},</td>
                <td>{e.phone},</td>
                <td>{e.email},</td>
                <td>{e.Cname},</td>
                <td>{e.Ccity}</td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </table>
    </>
  );
}
export default ListUsers;
