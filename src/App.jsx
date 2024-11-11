import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './conversor'

//constantes para agregar un valor.
function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [logueado, setLogueado] = useState(false)
  const [usuarioRegistro, setUsuarioRegistro] = useState('')
  const [claveRegistro, setClaveRegistro] = useState('')

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

function cambiarClave(evento) {
  setClave(evento.target.value)  
}

function cambiarUsuarioRegistro(evento) {
  setUsuarioRegistro(evento.target.value)
}

function cambiarClaveRegistro(evento) {
  setClaveRegistro(evento.target.value)  
}

//Esta funcion es para dar alerta si todo esta bien
async function iniciar(){
  const peticion = await fetch('http://localhost:3000/login?usuario='+usuario+'&clave='+clave,{credentials:'include'})
  if (peticion.ok){
    setLogueado(true)
  }else{
    alert('Usuario o clave incorrectos')
  }
}
  async function registrar(){
    if (usuarioRegistro.trim() === '' || claveRegistro.trim() === '') {
      alert('Por favor, complete todos los campos antes de registrar.');
      return;
    }
    const peticion = await fetch('http://localhost:3000/registro?usuario='+usuarioRegistro+'&clave='+claveRegistro,{credentials:'include'})
    if (peticion.ok){
      alert("Registro exitoso")
      setLogueado(true)
    }else{
      alert('Usuario no registrado')
    }

}
async function validar(){
  const peticion = await fetch('http://localhost:3000/validar',{credentials:'include'})
  if (peticion.ok){
    setLogueado(true)
  }
}

useEffect(()=>{
  validar()
}, [])

//quiero que me retorne al conversor 
if (logueado){
  return <Conversor />

}
  return (
    <>
    <h1>Inicio de session</h1>
      <input placeholder='usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
      <input placeholder='clave' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
      <button onClick={iniciar}>Iniciar</button>  

      <h1>Crear cuenta</h1>
      <input placeholder='usuario' type="text" name="usuario" id="usuario" value={usuarioRegistro} onChange={cambiarUsuarioRegistro} />
      <input placeholder='clave' type="password" name="clave" id="clave" value={claveRegistro} onChange={cambiarClaveRegistro} />
      <button onClick={registrar }>Registrar</button>  
    </>  
  )  
}

export default App
