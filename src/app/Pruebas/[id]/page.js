'use client'
import CuidadoAlert from '@/app/components/alerts/CuidadoAlert'
import ErrorAlert from '@/app/components/alerts/Error'
import Button_animated from '@/app/components/Button_animated'
import { getId, opreguntasPreguntas, preguntasTematicas } from '@/app/constants'
import { createTimer } from 'animejs'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Page = () => {
  const { id } = useParams()
  const [tematica, setTematica] = useState(null)
  const [loading, setLoading] = useState(true)
  const [preguntas, setPreguntas] = useState([])
  const [opreguntas, setOpreguntas] = useState([])
  const [seleccion, setSeleccion] = useState([])
  const [peligro, setPeligro] = useState(false)
 const router = useRouter()
  useEffect(() => {
    const fetchTematica = async () => {
      try {
        const data = await getId('tematicas', id)
        const data_preguntas = await preguntasTematicas(data.id)
        const data_opreguntas = []
        for (let i = 0; i < data_preguntas.length; i++) {
          data_opreguntas.push(await opreguntasPreguntas(data_preguntas[i].id))
        }
        
        setTematica(data)
        setPreguntas(data_preguntas)
        setOpreguntas(data_opreguntas)
        console.log(data_opreguntas)

        console.log('Datos recibidos:', opreguntas)
      } catch (error) {
        console.error('Error al consultar la temática:', error)
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchTematica()
  }, [id])

 const handleRadioChange = (preguntaId, opcionId, esCorrecta) => {
    setSeleccion((prev) => {
      const nuevaSeleccion = prev.filter((s) => s.preguntaId !== preguntaId)
      return [...nuevaSeleccion, { preguntaId, opcionId, esCorrecta }]
    })
  }

  const handleClickPeligro = () => {
    router.push("/Pruebas")
  }

  const handleClickPeligro2 = () => {
    setPeligro(false)
    return false
  }

  const handleClick = async () => {
    try {
      const correctas = seleccion.filter((s) => s.esCorrecta).length
      const total = preguntas.length
      const puntaje = (correctas/total) * 100

      const resultado = {
        id_tematica: tematica.id,
        id_usuario: 7, // Tego que sacarlo del local storage 
        puntuacion: puntaje,
        seleccion_usuario: seleccion
      }

      const response = await fetch("http://127.0.0.1:5000/pruebas/",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resultado)
      })

      if (!response.ok) throw new Error("Error al guardar la prueba")

    const data = await response.json()
    console.log("Respuesta del servidor:", data)
    alert("¡Prueba guardada correctamente!")


    } catch (error) {
      console.error("Error al guardar la prueba:", error)
      alert("Error al guardar")
    }

  }

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>
  }

  if (!tematica || !tematica.nombre_tematica) {
    return <p>No se encontró la temática.</p>
  }

  if (preguntas.length === 0) {
    return <p>Aún no hay preguntas para esta temática.</p>
  }

  return (
    <div className="max-w-5xl mx-auto p-10 min-h-screen">
      <button onClickCapture={() => setPeligro(true)} >Volver</button>
      {peligro ? <CuidadoAlert titutlo={"¡Cuidado!"} explicacion={"Si te sales ahora no se guardara tu progreso actual"} a={"De acuerdo"} b={"No salir"} estado={peligro} click={handleClickPeligro} click2={handleClickPeligro2} ></CuidadoAlert> : ""}
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-900 border-b-4 border-green-500 pb-4">
        Examen: {tematica.nombre_tematica}
      </h1>
      {preguntas.length > 0 ?
      <div className="space-y-10">
        {preguntas.map((p, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-10 text-left border border-gray-200 hover:shadow-2xl transition-shadow duration-200"
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-5">
              Pregunta {index + 1}
            </h2>

            {p.context && (
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                {p.context}
              </p>
            )}

            {p.context_img && (
              <div className="flex justify-center mb-6">
                <img
                  src={p.context_img}
                  alt="Imagen de contexto"
                  className="max-h-80 rounded-lg border border-gray-300 shadow-sm"
                />
              </div>
            )}

            <p className="text-lg font-medium text-gray-800 mb-8">
              {p.enunciado}
            </p>

            <div>
              {opreguntas[index] && opreguntas[index].map((op, opIndex) => (
                <label
                  key={`${index}-${opIndex}-${op.id}`}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg hover:bg-green-50 transition-colors cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`pregunta-${index}`}
                    className="radio radio-success"
                    value={op.id}
                    onChange={() => handleRadioChange(op.id_preguntas, op.id, op.es_correcta)}
                  />
                  <span>{op.texto_opcion}</span>
                </label>
              ))}
            </div>

            
          </div>
        )) }
         
        <Button_animated texto={'Terminar'} click={() => handleClick()} ></Button_animated> 
        
      </div>
      : <ErrorAlert titulo={"Vaya parece que aun no hay preguntas"} error={"Vuelve al menu principal"}></ErrorAlert>}
    </div>
  )
}

export default Page
