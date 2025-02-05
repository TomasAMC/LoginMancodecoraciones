import { useEffect, useState } from 'react'
import './App.css'


//constantes para agregar un valor.
function Usuarios() {
  const [usuarios, setUsuarios] = useState([])



//Esta funcion es para dar alerta si todo esta bien



async function obtenerUsuarios(){
  const peticion = await fetch('http://localhost:3000/usuarios',{credentials:'include'})
  if (peticion.ok){
    const respuesta  = await peticion.json()
    const usuariosFiltrados = respuesta.filter(usuario=> usuario.id != null );
    setUsuarios(usuariosFiltrados)
  }
}

async function elimianarUsuario(id){
  const peticion = await fetch('http://localhost:3000/usuarios?id='+id,{credentials:'include', method:'DELETE'})
  if (peticion.ok){
    alert('Usuario eliminado')
    obtenerUsuarios();

  }
}

useEffect(()=>{
  obtenerUsuarios()
}, [])

//quiero que me retorne al conversor 

  return (
    <>
      <table>
      <thead>
        <tr> 
        <th>id</th>
        <th>Usuario</th>
        <th>Clave</th>
        <th>Opciones</th>
        </tr>      
      </thead>
      <tbody>
        {
          usuarios.map(usuario=>(
        <tr key={usuario.id}>
        <th>{usuario.id}</th>
        <th>{usuario.usuario}</th>
        <th>{usuario.clave}</th>
        <th>
          <button
            onClick={()=>{elimianarUsuario(usuario.id)}}
            >X</button>
        </th>
        </tr>
        ))  
        }

      </tbody>    
      </table>
    </>  
  )  
}
export default Usuarios
