import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {
  const [textoAvoz, setTextoAvoz] = useState('')
  const [vozATexto, setVozATexto] = useState('')

function cambiarTexto (evento) {
  setTextoAvoz(evento.target.value)  
}

//funcion para convertir de texto a voz 
function convertirTextoAvoz() {
  const synth = window.speechSynthesis
  const utterThis = new SpeechSynthesisUtterance (textoAvoz)
  synth.speak(utterThis)
}
//si llega a ver un resultado 
function resultado(event){
  setVozATexto(event.results[0][0].transcript)
}
//funcion para convertir de voz a texto 
function gravarVozATexto(){
  const recognittion = new window.webKitSeechRecognition()
  recognittion.lang = 'es-Es'
  recognittion.start()
  recognittion.onresult = resultado
}
 
  return (
    <>
    <br />
    <h3>Voz de texto</h3>
    <input type="text" id="textoAvoz" value={textoAvoz} onChange={cambiarTexto}/>
    <button onClick={convertirTextoAvoz}>Convertir</button>

    <h3>Coversor voz a texto</h3>
    <button onClick={gravarVozATexto}>Gravar</button>
    {vozATexto}
    </>
  );

}

export default Conversor
