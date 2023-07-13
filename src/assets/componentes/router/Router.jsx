import { Route, Routes } from 'react-router-dom'

import MovieDetails from '../../pages/MovieDetails'
import LandingPage from '../../pages/LandingPage'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path = "/"  element ={<LandingPage/>}/>
            <Route path='/movies/:movieId' element = { <MovieDetails id=':movieID'/> } />
        </Routes>
    </>
  )
}

export default Router