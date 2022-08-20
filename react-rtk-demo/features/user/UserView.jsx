import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice';

export const UserView = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])
  return (
    <div>
      <h2>List of users</h2>
      {data.loading && <div>Loading..</div>}
      {!data.loading && data.error ? <div>{data.error}</div> : null}
      {!data.loading && data.users.length ? (
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
