import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider }  from './context/AuthContext.tsx'
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter } from "react-router-dom"
import './index.css'

const theme = createTheme({ 
  typography: { 
    fontFamily: 'Roboto Slab',
    allVariants: { color: "white" }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
