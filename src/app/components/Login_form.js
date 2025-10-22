'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Login_form({ mensaje_inicio, register=false, path  }) {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  
  const router = useRouter()


  const body = {
    correo,
    password,
    ...(nombres && { nombres }),
    ...(apellidos && {apellidos}), 
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
  
  const res = await fetch(`http://127.0.0.1:5000/${path}`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })

  const data = await res.json()

  if(!res.ok){
    console.log("Error en el login: ", data.error || data)
    return
  }

    router.push('/Pruebas')

  }


  return (
    <div className="grid grid-cols-[45%_55%] h-screen">
      <div className="flex flex-col justify-center items-center  text-gray-800 px-10">
        <div className="w-full max-w-sm">
          <h2 className="text-4xl font-bold mb-2 text-center">¡Bienvenido!</h2>
          <h3 className="text-lg mb-8 text-center">
            {mensaje_inicio}
          </h3>

          <form method="POST" onSubmit={handleSubmit} className="flex flex-col space-y-4">
            
            {register ? <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Nombres
              </label>
              <input
                type="text"
                value={nombres}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setNombres(e.target.value)}
              />
              <label className="text-sm font-semibold mb-1">
                Usuario
              </label>
              <input
                type="text"
                value={apellidos}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setApellidos(e.target.value)}
              />
            </div> : ""}
            
            
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                value={correo}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {register ? 
            <button
              type="submit"
              className="mt-4 bg-[#09c25b] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Registrate
            </button> :
            <button
              type="submit"
              className="mt-4 bg-[#09c25b] text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
                Iniciar Sesión
            </button>}
            
            
          </form>
          <div className='flex flex-col'>
            {register ? 
            <p><a href='/'>Inicia Sesión Aquí</a></p> :
            <p><a href='/'>Registrate  Aquí</a></p>}
            
          </div>
        </div>
      </div>

      <div className="bg-[url('/background_login.jpg')] bg-cover bg-center h-screen flex justify-center items-center text-white">
      </div>
    </div>
  )
}

export default Login_form
