import React, { useState } from "react";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import getfetchResults from "../../../utils/getfetchResults";

const MoviesGrid = () => {

  // utilizamos el hook para controlar el estado de las peliculas
  const [movies, setMovies] = useState([])

  // Todo estos requerimientos lo dice la pagina de la API
  // https://developer.themoviedb.org/docs/authentication-application

  // Podríamos usar axio en vez de fetch para la llamada asincrona
  useEffect(() => {
    getfetchResults("/discover/movie")
      .then(data => { 
        setMovies(data.results) ;  // actualizo el listado de peliculas con los valores obtenidos del fetch
        //console.log(movies);
       });
    }, [])  // --> le digo que este efecto se ejecute solo una vez, cuando se cargue el componente
  

  return (
    <ul className={styles.moviesGrid}>
      {
        movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))
      }
    </ul>
  );
};

export default MoviesGrid;
