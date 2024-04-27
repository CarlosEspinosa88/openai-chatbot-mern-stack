import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Logo from './shared/Logo'
import NavigationLink from './shared/NavigationLink'
import useAuth from '../hooks/useAuth'

export default function Header() {
  const auth = useAuth()

  return (
    <AppBar sx={{ bgcolor: "transparent", position: "static", boxShadow: "none"}}>
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink to='/chats' text='Go to chat' bg='#00fffc' textColor='black' />
              <NavigationLink to='/' text='Logout' bg='#51538f' textColor='white' onClick={auth?.logout} />
            </>
          ) : (
            <>
              <NavigationLink to='/login' text='Login' bg='#00fffc' textColor='black' />
              <NavigationLink to='/signup' text='Signup' bg='#51538f' textColor='white' />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}
