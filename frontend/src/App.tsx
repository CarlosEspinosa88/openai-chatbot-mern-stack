import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chats from './pages/Chats'
import NotFound from './pages/NotFound'
import useAuth from './hooks/useAuth'
import './App.css'

function App() {
  const auth = useAuth()

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {auth?.isLoggedIn && auth?.user && (
          <Route path='/chats' element={<Chats />} />
        )}
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
