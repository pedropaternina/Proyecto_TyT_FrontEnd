export const navLink = [
    {label: "Cuadernillos"},
    {label: "Nosotros"}

]

const url = 'http://127.0.0.1:5000/'



export async function get(path) {
    const res = await fetch(`${url}${path}`,{
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
    })  
  
    const data = await res.json()
    return data
}


export async function getId(path,id) {
    const res = await fetch(`${url}${path}/${id}`,{
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})  
  
    const data = await res.json()
    return data
}

export async function preguntasTematicas(id) {
    try {
        const res = await fetch(`${url}preguntas/tematica/${id}`,{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        })

        const data = await res.json()
        return data

    } catch (error) {
        console.error('Error al consultar la tematica', error)
    }
}

export async function opreguntasPreguntas(id) {
    try {
        const res = await fetch(`${url}opciones_preguntas/preguntas/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}

        })

        const data = await res.json()
        return data

    } catch (error) {
        console.error('Error al consultar las preguntas', error)
    }
}
    
