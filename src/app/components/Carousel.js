'use client'
import { Carousel } from '@material-tailwind/react'
import React from 'react'
import BookCanvas from './three/BookCanvas'
import Button_animated from './Button_animated'

export default function Carousel3d() {
  const items = [
    { titulo: 'Ciencias Sociales' },
    { titulo: 'Lectura Crítica' },
    { titulo: 'Matemáticas' },
    { titulo: 'Ciencias Naturales' },
  ]

  return (
    <Carousel className="w-full h-[500px] bg-white">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center gap-4 h-full"
        >
          <div className="w-full h-[350px]">
            <BookCanvas scale_book={0.6}/>
          </div>
          <h3 className="font-bold text-black">{item.titulo}</h3>
          <Button_animated texto={'Ver mas'}></Button_animated>
        </div>
      ))}
    </Carousel>
  )
}
