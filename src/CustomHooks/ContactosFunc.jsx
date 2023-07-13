import React, { useState } from 'react'
import Form from './Form'

// Este componente de Clase tiene un array de personas, y tiene como componente el Form
// al que le pasa como prop la funcion "agregarPersona"

const ContactosFunc = () => {

    const people =  [
        {id: 1, nombre: 'Santi'}, 
        {id: 2, nombre:'Carlos'}, 
        {id: 3, nombre:'Micaa'}, 
        {id: 4, nombre:'Miguel'},
        {id: 5, nombre:'Pablo'}
    ]

    const [personas, setPersonas] = useState(people)

            // Esta funcion recibe el id y el nuevo nombre que se puso en el formulario
            const agregarPersonaNew = (nuevoId, nuevoNombre) => {

                const persona = {
                    // como el id tiene que ser unico, leo la longitud del objeto y le sumo uno
                    id: personas.length + 1,
                    nombre: nuevoNombre,
                }
    
                // acá le decimos que seteamos el estado con lo que ya tiene el objeto persona
                // mas la nueva persona que se agrega
                const people = [...personas, persona]
                setPersonas(people)
                    
                console.log('Datos recibios:', persona)

            }

  return (
    <div><div>
    <ul>
        {
            personas.map(i =>
            <li key={i.id}>{i.id}: {i.nombre}</li>)
        }
    </ul>
</div>
<Form agregarPersona={agregarPersonaNew}/></div>
  )
}

export default ContactosFunc
