import React, { useState } from 'react'

export const UserContext = React.createContext()

export default ({ children }) => {
  const prevUser = JSON.parse(localStorage.getItem('user')) || false
  const [user, setUser] = useState(prevUser)

  const defaultContext = {
    ...user,
    setUser
  }

  return (
    <UserContext.Provider value={defaultContext}>
      {children}
    </UserContext.Provider>
  )
}

// import React from 'react';

// const UserContext = React.createContext({});

// export const UserProvider = UserContext.Provider;
// export const UserConsumer = UserContext.Consumer;
// export default UserContext;
