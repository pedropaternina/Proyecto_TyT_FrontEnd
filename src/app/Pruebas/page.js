'use client'
import React, { useEffect, useState } from 'react'
import { get } from '../constants'
import BookCanvas from '../components/three/BookCanvas'
import { animate } from 'animejs'
import Button_animated from '../components/Button_animated'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation'


const Pruebas = () => {
  const [tematicas, setTematicas] = useState([])
  const router = useRouter()
  useEffect(() => {
    get('tematicas/')
      .then(data => setTematicas(data))
      .catch(err => console.error(err))
  }, [])

  const handleClick = (id) => {
    router.push(`/Pruebas/${id}`) //Enviar a pruebas/1 siendo 1 el ID de la tematica    
  }

  return (
    <main>
      <NavBar></NavBar>
    <div className="flex flex-col items-center p-9  space-y-8">
      <h2 className="text-3xl font-bold text-black">Plantillas</h2>
      <p className="text-gray-700 text-lg text-center max-w-xl">
        En este apartado podrás poner a prueba todas tus habilidades.
      </p>

      {tematicas.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tematicas.map((t) => (
            <div
              key={t.id}
              className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center bg-gray-100 py-4">
                <BookCanvas scale_book={1.1} />
              </div>
              <div className="px-6 py-4 text-center">
                <h3 className="font-bold text-xl mb-2 text-gray-800">
                  {t.nombre_tematica}
                </h3>
                <p className="text-gray-600 mb-4">Cuadernillo ICFES</p>
                <Button_animated texto={'COMIENZA!'} click={() => handleClick(t.id)} ></Button_animated>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">Cargando temáticas...</p>
      )}
    </div>
    <Footer></Footer>
    </main>
  )
}

export default Pruebas
