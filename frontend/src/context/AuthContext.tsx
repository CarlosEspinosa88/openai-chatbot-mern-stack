import { useState, useEffect, createContext, ReactNode } from "react";
import { loginUser } from "../helpers/api";
import { checkAuthStatus } from "../helpers/api"

type User = {
  name: string;
  email: string;
}

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string,  password: string) => Promise<void>
  signup: (name: string, email: string,  password: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<UserAuth | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode}) => {
  const [ user, setUser ] = useState(null)
  const [ isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    async function checkUserStatus() {
      const data = await checkAuthStatus()

      if (data) {
        setIsLoggedIn(true)
        setUser({ email: data.email, password: data.password })
      }
    }

    checkUserStatus()
  }, [])

  const login = async (email: string, password: string) => {
    console.log("CONTEXT", { email, password })
    const data = await loginUser( email, password)
    
    if (data) {
      setIsLoggedIn(true)
      setUser({ email: data.email, password: data.password })
    }
  }

  const signup = (name: string, email: string,  password: string) => {
    console.log({ name, email, password})
  }

  const logout = () => {}

  const value = {
    user,
    isLoggedIn,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

