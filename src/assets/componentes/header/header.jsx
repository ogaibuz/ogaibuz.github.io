import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export class Header extends Component {
  render() {
    return (
      <div className='jumbotron' id='header'>
        <div className='container'>
            <Link to="/">
              <h3 className='text-center'>📽Películas</h3>
            </Link>
            <p className="text-center">
                Desde aquí podrá valorar y calificar las películas, 
                así como también contactarse con nosotros 
                para resolver cualquier necesidad como cliente.
            </p>
        </div>
      </div>
    )
  }
}

export default Header