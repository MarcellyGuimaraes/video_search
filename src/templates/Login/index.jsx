import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../contexts/AuthContext'
import { LogoIcon } from '../../icons'

const Login = () => {
  const [form, setForm] = useState('')
  const { setAuth, auth } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if (form.email == 'teste@gmail.com' && form.senha == '12345678') {
      setAuth(true)
      localStorage.setItem('login', auth)
      navigate('/home')
      window.alert('logado com sucesso')
    } else {
      window.alert('dados inseridos incorretos, tente novamente!')
    }
  }

  return (
    <form
      className="flex h-screen flex-col items-center justify-center bg-red-700"
      onSubmit={handleSubmit}
    >
      <div className="p-10 m-5">
        <div className="mb-11 flex h-20 w-full items-center justify-center">
          <LogoIcon />
        </div>
        <div className="form">
          <div>
            <input
              className="text-gray-base mb-7 h-12 w-full rounded border border-gray-200 py-5 px-4 text-sm"
              placeholder="O E-mail é: teste@gmail.com"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              name="email"
            />
            <input
              className="text-gray-base mb-7 h-12 w-full rounded border border-gray-200 py-5 px-4 text-sm"
              placeholder="A Senha é: 12345678"
              type="password"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              name="senha"
            />
          </div>
          <div className="mb-11 flex h-20 w-full items-center justify-center">
            <button
              className="h-14 w-36 rounded bg-red-500 py-5 px-4 text-white hover:border hover:border-gray-200 hover:bg-red-600"
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login
