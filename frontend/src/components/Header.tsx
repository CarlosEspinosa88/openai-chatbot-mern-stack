import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Logo from './shared/Logo'

export default function Header() {
  return (
    <AppBar sx={{ bgcolor: "transparent", position: "static", boxShadow: "none"}}>
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
      </Toolbar>
    </AppBar>
  )
}
