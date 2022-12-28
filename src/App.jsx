import React, { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'
import PrivateRoutes from './routes/private_routes'
import PublicRoutes from './routes/public_routes'

function App() {
  const { auth } = useContext(AuthContext)
  const getAuth = localStorage.getItem('login')

  return getAuth || auth ? <PrivateRoutes /> : <PublicRoutes />
}

export default App
