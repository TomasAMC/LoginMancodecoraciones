import { useEffect, useState } from 'react'
import './App.css'
import Conversor from './conversor'
import Usuarios from './Usuarios'
//import Registro from './Registro'


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

    //funcion para registrar usuario
    async function registrar(){
      const peticion = await fetch('http://localhost:3000/registro?usuario=' + usuarioRegistro +'&clave=' + claveRegistro,
      {credentials:'include'} )
      if (peticion.ok){
          alert("Registro exitoso")
          setLogueado(true)
          obtenerUsuarios();
        }else{
          alert('Usuario no registrado');
      }
    }
   

//validar seccion al cargar app
async function validar(){
  const peticion = await fetch('http://localhost:3000/validar',{credentials:'include'})
  console.log(peticion); 
  if (peticion.ok){
    setLogueado(true);
  }//else{
   // console.error('Error validando sesión:', peticion.statusText);
  //}
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

  </>)

    }

    return (
      <>
    <h1>Inicio de session</h1>
      <input data-cy="username" placeholder='usuario' type="text" name="usuario" id="usuario1" value={usuario} onChange={cambiarUsuario} />
      <input data-cy="password" placeholder='clave' type="password" name="clave" id="clave1" value={clave} onChange={cambiarClave} />
      <button onClick={iniciar}>Iniciar</button>
    
      
    <h1>Crear cuenta</h1>
    <input placeholder='usuario' type="text" name="usuario" id="usuario2" value={usuarioRegistro} onChange={cambiarUsuarioRegistro} />
    <input placeholder='clave' type="password" name="clave" id="clave2" value={claveRegistro} onChange={cambiarClaveRegistro} />
    <button onClick={registrar }>Registrar</button> 

      </>
  )  

}

export default App
