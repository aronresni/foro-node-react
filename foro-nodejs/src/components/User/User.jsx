import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { activeuser } from '../../redux/action/action';
const User = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userstate)
  const username = sessionStorage.getItem(`username`)
useEffect(() => {
dispatch(activeuser(username))
}, []);
console.log(user);
console.log(username);

  return (
    <div>
    <p>{user.username}</p>
    <p>{user.email}</p>
    </div>
  )
}

export default User
