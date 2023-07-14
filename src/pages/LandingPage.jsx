import Header from '../assets/componentes/header/header'
import Footer  from '../assets/componentes/footer/footer'
import MoviesGrid from '../assets/componentes/Movies/MoviesGrid'

const LandingPage = () => {
    
     return (
      <>
          <Header/>
            <div>
              <main>
                <MoviesGrid/>
              </main>
            </div>
  

          <Footer/>
      </>
  )
}

export default LandingPage