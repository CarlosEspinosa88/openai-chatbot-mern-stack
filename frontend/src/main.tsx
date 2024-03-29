import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider }  from './context/AuthContext.tsx'
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import './index.css'

axios.defaults.baseURL = "http://localhost:8000/api/v1"
axios.defaults.withCredentials = true

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
          <Toaster position='top-right' />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
