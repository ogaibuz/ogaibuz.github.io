import Header from '../header/header'
import Footer  from '../footer/footer'
import MoviesGrid from '../Movies/MoviesGrid'

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