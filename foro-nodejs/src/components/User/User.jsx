import React, {useContext} from 'react'
import { UserContext } from '../../state/userContextProvider'
const User = () => {
  const { user } = useContext(UserContext)
  console.log(user);
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p> {/* Accede al nombre de usuario del objeto del usuario */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
        </div>
      )}
    </div>
  )
}

export default User
