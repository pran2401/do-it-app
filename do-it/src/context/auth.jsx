import { createContext,useState } from "react";

import React from 'react'

export const AuthContext=createContext();


function AuthProvider({children}) {
    const [isAuth,setisAuth]=useState(false)
    const [username, setUsername] = useState(null)
    
  return (
    <AuthContext.Provider value={{isAuth,setisAuth,username,setUsername}}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider