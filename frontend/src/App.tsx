import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chats from './pages/Chats'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
