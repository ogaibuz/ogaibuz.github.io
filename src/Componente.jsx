import React, { useState } from 'react'

const Componente = () => {

  const [estado, setEstado] = useState(false)

  const handleClick = () => {
    if (estado === true ) {
        setEstado(false)
    } else {
        setEstado(true)
    }
    
  }

  if (estado) {
        return (
               <div>Hola este es un componente creado con una clase
                    <button onClick={handleClick}>Tocar</button>
               </div>
               
          )
    } else {
         return (
        
              <div>El contenido se encuentra oculto
                 <button onClick={handleClick}>Tocar</button>
              </div>
        )
    }}

export default Componente