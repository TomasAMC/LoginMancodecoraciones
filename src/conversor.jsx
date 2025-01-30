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
  utterThis.lang = 'es-Es';
  synth.speak(utterThis)
}
//si llega a ver un resultado 
function resultado(event){
  setVozATexto(event.results[0][0].transcript)
}
//funcion para convertir de voz a texto 
function grabarVozATexto() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  // Verificar compatibilidad del navegador
  if (!SpeechRecognition) {
    console.error('El reconocimiento de voz no es compatible con este navegador');
    alert('Tu navegador no soporta reconocimiento de voz');
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'es-ES'; // Configuración correcta del idioma
  recognition.continuous = false; // Dejar de escuchar tras una frase
  recognition.interimResults = false; // Mostrar solo resultados finales

  recognition.onresult = resultado;

  recognition.onerror = (event) => {
    console.error('Error en el reconocimiento de voz:', event.error);
    alert('Error en el reconocimiento de voz: ' + event.error);
  };

  recognition.onend = () => {
    console.log('Reconocimiento finalizado');
  };

  // Iniciar el reconocimiento
  recognition.start();
}
 
  return (
    <>
    <br />
    <h3>Voz de texto</h3>
    <input type="text" id="textoAvoz" value={textoAvoz} onChange={cambiarTexto} />
    <button onClick={convertirTextoAvoz}>Convertir</button>

    <h3>Coversor voz a texto</h3>
    <button onClick={grabarVozATexto}>Gravar</button>
    <div style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
  <strong>Texto reconocido:</strong>
  <p>{vozATexto}</p>
</div>
    </>
  );

}

export default Conversor
