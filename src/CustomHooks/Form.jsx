import React, { Component } from 'react'
import './../styles/Form.css'

export class Form extends Component {

    envioFormulario = event => {
        console.log('Los datos han sido procesados 2')
        event.preventDefault()

        this.props.agregarPersona(
          document.getElementById('id').value,
          document.getElementById('nombre').value,
          document.getElementById('email').value
        )

        // blanqueo los campos del formulario
        document.getElementById('id').value =""
        document.getElementById('nombre').value = ""
        document.getElementById('email').value = ""

    }

  render() {
    return (
      <div>
        <form className='formularios' onSubmit={this.envioFormulario}> 
            <label className='etiquetas'>Id: </label> <br />
            <input className='ingreso' type="number" placeholder='Ingrese Id' id='id' name='id' required /> <br />

            <label className='etiquetas'>Nombre</label><br />
            <input className='ingreso' type="text" placeholder='Ingrese el nombre' name="nombre" id="nombre" required/><br />

            <label className='etiquetas'>EMail</label><br />
            <input className='ingreso' type="email" placeholder='Ingrese el Email' name="email" id="email" required/><br />

            <button className='botones' type="submit">Enviar</button>
        </form>
      </div>
    )
}
}

export default Form
