import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4 bg-slate-300">
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
