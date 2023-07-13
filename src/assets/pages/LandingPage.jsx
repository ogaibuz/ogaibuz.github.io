import Header from './../componentes/header/header'
import Footer  from './../componentes/footer/footer'
import MoviesGrid from './../componentes/Movies/MoviesGrid'

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