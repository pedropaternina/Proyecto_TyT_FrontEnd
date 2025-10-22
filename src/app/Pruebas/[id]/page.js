'use client'
import { getId } from '@/app/constants'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const { id } = useParams()
  const [tematica, setTematica] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTematica = async () => {
      try {
        const data = await getId('tematicas', id)
        console.log('Datos recibidos:', data)
        setTematica(data) 
      } catch (error) {
        console.error('Error al consultar la temática:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchTematica()
  }, [id])

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>
  }

  if (!tematica || !tematica.nombre_tematica) {
    return <p>No se encontró la temática.</p>
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">{tematica.nombre_tematica}</h1>
      <p className="text-gray-600 mt-2">ID: {tematica.id}</p>
      <p className="text-gray-500 text-sm mt-1">
        Creado el: {new Date(tematica.created_at).toLocaleDateString()}
      </p>
    </div>
  )
}

export default Page
