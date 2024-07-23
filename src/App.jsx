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

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

function cambiarClave(evento) {
  setClave(evento.target.value)  
}

//Esta funcion es para dar alerta si todo esta bien
async function iniciar(){
  const peticion = await fetch('http://localhost:3000/login?usuario='+usuario+'&clave='+clave,{credentials:'include'})
  if (peticion.ok){
    setLogueado(true)
  }else{
    alert('Usuario o clave incorrectos')
  }
//  if (usuario =='admin' && contraseña == 'admin'){
//    alert('ingreso exitoso' )
//    setlogeado (true)
//  } else {
//    alert('usuario o contraseña incorrecta')
//  }  
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
    <h1>Manco Decoraciones</h1>
      <input placeholder='usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
      <input placeholder='clave' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
      <button onClick={iniciar}>Iniciar</button>  
    </>  
  )  
}

export default App
