import React, { Component } from 'react'

class MiLista extends Component {

// contactos = ['Santi', 'Carlos', 'Mica', 'Marta']  --->  esto es un array
// ahora vamos a ver con un objeto JSON
contactos = [
  {id: 1, nombre: 'Santi'}, 
  {id: 2, nombre:'Carlos'}, 
  {id: 3, nombre:'Micaa'}, 
  {id: 4, nombre:'Marta'}
]

  render() {
    return (
      <div>
        <h1>Mi Lista de Contactos</h1>
        <ul>
          { // Para mejorar la performance de React es necesario establecer una propiedad key para cada objeto
            this.contactos.map (i => <li key={i.id}>ID: { i.id }, Nombre: { i.nombre }</li>) 
          }
        </ul>
      </div>
    )
  }
}

export default MiLista;