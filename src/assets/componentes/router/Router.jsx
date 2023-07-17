import { Route, Routes } from 'react-router-dom'

import MovieDetails from '../../../pages/MovieDetails'
import LandingPage from '../../../pages/LandingPage'
import Contact from '../contact/Contact'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path = "/"  element ={<LandingPage/>}/>
            <Route path='/movies/:movieId' element = { <MovieDetails id=':movieID'/> } />
            <Route path = "/contact"  element ={<Contact/>}/>
        </Routes>
    </>
  )
}

export default Router