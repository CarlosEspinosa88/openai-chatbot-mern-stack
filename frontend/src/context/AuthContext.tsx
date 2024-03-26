import { useState, useEffect, createContext, ReactNode } from "react";

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
    // fetch cookies validations
  }, [])

  function login(email: string, password: string) {}

  function signup(name: string, email: string,  password: string) {}

  function logout() {}

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

