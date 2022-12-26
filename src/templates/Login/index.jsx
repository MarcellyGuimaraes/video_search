import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../contexts/AuthContext'

const Login = () => {
  const [form, setForm] = useState('')
  const { setAuth, auth } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if (form.email == 'teste@gmail.com' && form.senha == '123') {
      setAuth(true)
      navigate('/home')
      window.alert('logado com sucesso')
    } else {
      window.alert('dados inseridos incorretos, tente novamente!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form">
          <div className="container-input-label">
            <div className="childen-container-input-label">
              <label>Digite seu Email</label>
              <input
                placeholder="E-mail"
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                name="email"
              />
            </div>
            <div className="childen-container-input-label">
              <label>Digite sua Senha</label>
              <input
                placeholder="Senha"
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                name="senha"
              />
            </div>
          </div>
          <div className="container-button">
            <button type="submit">LOGIN</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login
