'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'
import Book from './models/Book'
import StudioLights from './three/StudioLights'
import BookCanvas from './three/BookCanvas'

const Hero = () => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[605px] px-8'>
      
      {/* Columna izquierda - texto */}
      <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] text-black order-2 md:order-1'>
        <div className='space-y-5 text-center md:text-left'>
          <h1 className='text-3xl lg:text-6xl xl:text-7xl font-bold text-shadow'>
            Prepárate TyT
          </h1>
          <p className='text-sm leading-loose text-black/80'>
            Prepárate TyT es una plataforma educativa diseñada para apoyar a los estudiantes técnicos y tecnólogos en su preparación para las pruebas Saber TyT. 
          </p>
        </div>
      </div>

      {/* Columna derecha - contenedor del modelo 3D */}
      <div className='order-1 md:order-2 flex items-center justify-center relative'>
        <div
          id='book-model'
          className='w-full h-[400px] md:h-[500px] lg:h-[600px]'
        >
          <BookCanvas scale_book={0.9}></BookCanvas>
        </div>
      </div>

    </div>
  )
}

export default Hero
