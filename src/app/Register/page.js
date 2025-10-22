'use client'
import React from 'react'
import Login_form from '../components/Login_form'

const Register = () => {
  return (
    <Login_form mensaje_inicio={"Registrate para comenzar a aprender"} register={true} path={'users/register'}></Login_form>
  )
}

export default Register
