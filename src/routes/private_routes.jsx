import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Detail from '../templates/Detail'
import Home from '../templates/Home'
import Login from '../templates/Login'

const PrivateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  )
}

export default PrivateRoutes
