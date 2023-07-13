import React, { Component } from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

// El componente LINK funciona de manera similar que la etiqueta <a>
// En lugar de utilizar el atributo "href" para definir la ruta a la cual moverse
// utiliza la propiedad "to" para definir a que ruta moverse sin realizar una recarga completa del sitio
// Recordemos que con REACT no debería recargar ni realiar redirecciones luego de la carga nicial,
// sino comportarse como una SPA (Single Page Application ), sin ncesidad de hacer recargas
// "/contact" esta especificado en el archivo de rutas (src/components/router/Router.jsx)
export class Footer extends Component {
  render() {
    return (
      <div className='container-fluid mt-5' id='footer' >
        <div className="row d-flex justify-content-center m-4">
            <div className='col-10 col-xs-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 d-flex justify-content-center'>
                <p id='footer-text'></p>
                    Lorem Ipsum
            </div>
        
            <div className='col-10 col-xs-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 d-flex justify-content-center'>
                <Link
                  to="/contact"
                  className='btn btn-secondary contact-button'
                > Contact

                </Link>

            </div>
        </div>
      </div>
    )
  }
}

export default Footer;

