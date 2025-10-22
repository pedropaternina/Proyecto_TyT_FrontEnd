'use client'
import React from 'react'
import Login_form from '../components/Login_form'

const Login = () => {
  return (
    <main>
      <Login_form mensaje_inicio={"Inicia sesión para continuar"} path={'users/login'}></Login_form>
      
    </main>
  )
}

export default Login
    Login