import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Link to="/">
          <h3 className='text-center'>📽Películas</h3>
      </Link>
      <div style={{paddingTop:'80px'}}>
        <h1>Página en Construcción</h1>
        <div>Esta pagina está en construcción</div>
        <div>Estamos trabajando para mejorar nuestro sitio!</div>
        </div>
    </div>
    
  )
}

export default Contact