import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../contexts/AuthContext'

const Login = () => {
  const [form, setForm] = useState('')
  const { setAuth, auth } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    if (form.email == 'teste@gmail.com' && form.senha == '12345678') {
      setAuth(true)
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
          <svg
            className="h-10 w-28 text-white"
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 80 29"
            role="img"
            aria-label="iCasei"
          >
            <g>
              <path
                fill="currentColor"
                d="M67.813 13.467c.607 0 1.21.453 1.21 1.998 0 1.916-2.152 4.47-3.663 4.47 0-1.887.175-6.468 2.453-6.468M37.815 25.9c-1.706 0-2.823-2.369-2.823-6.118 0-3.482 1.172-5.641 2.823-5.641 1.333 0 2.558 1.82 2.558 5.849 0 3.395-1.074 5.91-2.558 5.91m39.327-13.016c-1.53 0-2.14 1.193-1.942 2.47.606 3.919-2.218 10.66-6.216 10.66-2.541 0-3.612-1.58-3.612-4.986 2.591 0 6.095-2.616 6.095-5.39 0-1.767-1.36-3.127-3.903-3.127-3.012 0-6.289 3.245-6.289 7.7 0 .464.035.91.1 1.336-.029.087-.759 2.316-2.936 3.91.508-.727.567-1.285.567-2.058 0-3.299-6.098-6.79-6.098-9.898 0-1.297 1.17-2.243 1.17-3.474 0-1.405-.768-2.075-1.815-2.075-1.403 0-2.086 1.098-2.086 2.804 0 1.054.463 2.297 1.09 3.62-1.753 5.428-4.911 9.926-5.918 9.926-1.38 0-.307-5.261-.307-7.913 0-2.299-.534-3.597-2.095-3.597-1.355 0-2.131 1.108-2.131 2.848 0-1.74-1.728-3.145-3.82-3.145-3.8 0-6.243 3.471-6.243 7.495 0 .16.004.32.01.476-.81 3.453-4.22 6.19-7.43 6.19-4.797 0-7.143-4.713-7.143-12.655 0-6.423 2.882-12.51 7.272-12.51 3.562 0 4.275 3.8 4.275 5.067 0 1.791 1.145 2.316 2.116 2.316 1.168 0 1.96-1.045 1.96-2.065C31.812 4.52 29.29 0 23.85 0c-7.995 0-12.435 6.558-12.435 14.38 0 .198.005.398.014.598-.02 5.617-.99 10.598-4.035 10.588-1.747-.006-3.157-1.696-3.157-6.282 0-1.738.576-3.266.576-4.202 0-.675-.28-2.196-1.875-2.196-1.875 0-2.939 1.87-2.939 5.046 0 4.733 2.855 9.312 6.856 9.326 2.5.008 5.096-1.88 5.83-6.918 1.832 4.268 5.542 7.808 10.452 7.808 4.552 0 7.125-3.066 8.037-5.09.85 2.803 2.932 4.426 5.722 4.426 2.557 0 4.276-3.12 4.276-5.138 0 3.02.969 4.912 2.828 4.912 4.174 0 7.508-9.616 8.059-11.296 1.22 2.358 2.583 4.836 2.583 6.9 0 1.726-.635 2.45-1.92 2.45-.853 0-1.64-.425-1.64-1.236 0-.292-.218-.438-.496-.438-.385 0-.636.43-.636.94 0 1.4 1.308 3.258 5.116 3.258 2.81 0 5.066-1.098 6.943-4.173 1.173 2.457 3.648 3.867 6.665 3.867 3.71 0 6.897-3.987 7.282-7.654-.045 1.577-.66 6.343-.66 6.686 0 .33.19.696.685.696 1.681 0 4.018-5.278 4.018-9.17 0-3.453-1.112-5.204-2.858-5.204M3.704 10.37a2.222 2.222 0 1 0 0-4.444 2.222 2.222 0 0 0 0 4.444M76.296 10.37a2.222 2.222 0 1 0 0-4.444 2.222 2.222 0 0 0 0 4.444"
              ></path>
            </g>
          </svg>
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
