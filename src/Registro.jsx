import { useEffect, useState } from 'react'
import './App.css'


//constantes para agregar un valor.
function Registro() {
  const [usuarioRegistro, setUsuarioRegistro] = useState('')
  const [claveRegistro, setClaveRegistro] = useState('')
 


  

function cambiarUsuarioRegistro(evento) {
  setUsuarioRegistro(evento.target.value)
}

function cambiarClaveRegistro(evento) {
  setClaveRegistro(evento.target.value)  
}

//Esta funcion es para dar alerta si todo esta bien
  async function registrar(){
    if (usuarioRegistro.trim() === '' || claveRegistro.trim() === '') {
      alert('Por favor, complete todos los campos antes de registrar.');
      return;
    }
    const peticion = await fetch('http://localhost:3000/registro?usuario='+usuarioRegistro+'&clave='+claveRegistro,{credentials:'include'})
    if (peticion.ok){
      alert("Registro exitoso")
    }else{
      alert('Usuario no registrado')
    }

}




useEffect(()=>{
}, [])



  return (
    <>
      <h1>Crear cuenta</h1>
      <input placeholder='usuario' type="text" name="usuario" id="usuario" value={usuarioRegistro} onChange={cambiarUsuarioRegistro} />
      <input placeholder='clave' type="password" name="clave" id="clave" value={claveRegistro} onChange={cambiarClaveRegistro} />
      <button onClick={registrar }>Registrar</button>   
    </>  
  )  
}

export default Registro
