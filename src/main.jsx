import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//import './index.css'

// La aplicación llama al enrutador de React que se ha definido, y que
// a su vez inicia el componente App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
)
