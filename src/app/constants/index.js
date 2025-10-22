export const navLink = [
    {label: "Cuadernillos"}

]



export async function get(path) {
    const res = await fetch(`http://127.0.0.1:5000/${path}`,{
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
    })  
  
    const data = await res.json()
    return data
}


export async function getId(path,id) {
    const res = await fetch(`http://127.0.0.1:5000/${path}/${id}`,{
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})  
  
    const data = await res.json()
    return data
}

    
