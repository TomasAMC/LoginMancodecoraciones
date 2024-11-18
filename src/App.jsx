import { useEffect, useState } from 'react'
import './App.css'
import Conversor from './conversor'
import Usuarios from './Usuarios'
import Registro from './Registro'


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
  return (
  <>
  <Conversor />
 <Usuarios/>
 <Registro/>

  </>)

}
  return (
    <>
    <h1>Inicio de session</h1>
      <input placeholder='usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
      <input placeholder='clave' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
      <button onClick={iniciar}>Iniciar</button>  

      <Registro/>


    </>  
  )  
}

export default App
