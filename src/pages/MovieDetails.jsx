import React, { useEffect, useState } from 'react'
import styles from './movieDetails.module.css'
import { Link, useParams } from 'react-router-dom';
import getfetchResults from '../utils/getfetchResults'
import Comments from '../assets/componentes/reviews/Comments'
import Rating from './../assets/componentes/rating/Rating'
import { prevcomments } from '../data/base.js'

const MovieDetails = () => {

  // Utilizo el hook "useParams" para obtener el parametro pasado en por la URL
  // en nuestro caso el id de la película
  const { movieId } = useParams();
  console.log(movieId);

  const [movie, setMovie] = useState(null);

  const [comments, setComments] = useState([]);

    
  useEffect(() => {
    getfetchResults('/movie/' + movieId
    ).then(data =>{setMovie(data)})
    },[movieId])  // el efecto va a depender si se actualiza "movieId"

    useEffect (() => {
      
      // Chequeo si existen comentarios guardados en el Storage
      const storedComments = JSON.parse(localStorage.getItem(`comments_${movieId}`)) || [];
  
      // Si no hay comentarios guardados en el storage
      if (storedComments.length === 0) {
        // Establezco algunos comentarios por defecto, se ejecuta apenas se carga el componente
        localStorage.setItem('comments', JSON.stringify(prevcomments));
        console.log(prevcomments)
        setComments(prevcomments)} else {
      // guardo en una variable el store de todos los comentarios
        setComments(storedComments);
        }
    }, [])

  // Defino que el componente devuelva "Nulo" la primera vez que se cargue
  // sino va a dar errores al cargar con los datos de la pelicula que todavía 
  // no se cargó ya que el efecto se ejecuta una vez que se haya cargado el componente
  if  (!movie) {
    return null
  }

      // Creo la función de addComment que la paso para que la utilice el componente Rating
      const addComment = (comment) => {
        const newComments = [...comments, comment];
        setComments(newComments);
        localStorage.setItem(`comments_${movieId}`, JSON.stringify(newComments));
      };
  
  const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
        <img 
          className= {`${styles.col} ${styles.movieImage}`} 
          src={imgUrl} 
          alt={movie.title}/>
        <div className= {`${styles.col} ${styles.movieDetails}`}>
            <p><strong>Title:</strong>{movie.title}</p>
            <p>
              <strong>Genres:</strong> {" "} 
              {
                movie.genres.map (genre => genre.name).join(', ')
              }
            </p>
            <p><strong>Description:</strong> {movie.overview}</p>
        </div>
        <div className={styles.detailsContainer}>
              <div className='row'>
                <div>
                  <Rating addComment={addComment} commentsCount={comments.length}/>
                </div>
                <div>
                  <Comments comments={comments}/>
                </div>
                <div>
                <Link
                  to="/"
                  className='btn btn-secondary contact-button'
                > Volver
                </Link>
                </div>
              </div>
            </div>
    </div>
  )
}

export default MovieDetails