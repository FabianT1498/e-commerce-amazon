import React, { createContext, useReducer, useEffect } from "react"
import { reducer } from "./reducer"
import { auth } from '_app/firebase';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, null)

  useEffect(() => {

    // Will only run once when the component loads...
    auth.onAuthStateChanged(authUser => {
      
      if (authUser){
        // The user just logged in / the user was logged in
        dispatch({type: 'SET_USER', user: authUser})
      } else {
        // The user is logged out
        dispatch({type: 'SET_USER', user: null})
      }
    })    
  }, [])

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider