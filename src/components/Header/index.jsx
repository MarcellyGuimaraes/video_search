import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4 bg-red-700 text-white">
      <div>
        <p>Nome de usuário</p>
        <strong>teste@gmail.com</strong>
      </div>

      <div>
        <Link to="/">Logout</Link>
      </div>
    </div>
  )
}

export default Header
