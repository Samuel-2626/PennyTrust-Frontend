import React, { useState, createContext } from 'react'


export const UserContext = createContext()

export const PrimaryKeyContext = createContext()


export const UserProvider = (props) => {

  const [token, setToken] = useState('')
  const [pk, setPk] = useState(null)

  return (
    <UserContext.Provider value={[token, setToken]}>
      <PrimaryKeyContext.Provider value={[pk, setPk]}>
        {props.children}
      </PrimaryKeyContext.Provider>
    </UserContext.Provider>
  );
}

