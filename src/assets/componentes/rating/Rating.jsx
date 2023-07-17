import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const Rating  = ({ addComment, commentsCount }) => {

    const [rating, setRating] = useState({ actualRating:0,})
    const [nameState, setNameState] = useState({name: ''})
    const [paisState, setPaisState] = useState({pais: ''})
    const [comentState, setComentState] = useState({coment: ''})

    // setState() es, en la mayoria de los casos, una operación asincrónica
    const cambiarRating = async (value) => {
        console.log('El valor es -->', value)
        // con el await se pausa la operación hasta que finaliza la Promise
        await setRating({ actualRating: value });
        console.log(nameState);
        }


         const sendCalification = () => {
   
            const lastComentId = localStorage.getItem('comments_678512');
            const newId = lastComentId ? parseInt('id') + 1 : 1;
            console.log('El newID es', newId);

            const newComment = {
                id: commentsCount + 1,
                name: nameState.name ,
                starts: rating.actualRating,
                otros: {
                    pais:paisState.pais,
                    coment:comentState.coment,
                }
            };
          

            addComment(newComment);

            setRating({ actualRating:0,});
            setNameState({name: ''});
            setComentState({coment: ''})
            setPaisState({pais:''})

            console.log("Sending...");
    
               
        }

        const updateStateName = (event) =>{
            setNameState({ name: event.target.value });
            console.log(event.target.value);
        }

        const updateStateComment = (event) =>{
            setComentState({ coment: event.target.value });
            console.log(event.target.value);
        };

        const updateStatePais = (event) =>{
            setPaisState({ pais: event.target.value });
            console.log(event.target.value);
        };
        
        


  return (
    <>
    <div className='card'>
          <div className="card-body">
              <h5 className="card-title">Califique la película</h5>
          </div>
          
              <div className="row d-flex justify-content-center mt-5 mb-4">
                  {
                      [...Array(5)].map((star, i)=>{
                          const value = i + 1;
                          return (
                              // un input del tipo radio muestra un icono para marcar opciones
                              <label key={value} className="labelStar">
                                  <input type="radio" 
                                          name="rating" 
                                          value={value} 
                                          onClick={()=> cambiarRating(value)}/>
                                  <FaStar
                                      className="star"
                                      size={50}
                                      color={value <= rating.actualRating ? "#ffc107" : "#e4e5e9"}
                                  />
                              </label>
                          )

                      })
                  }
              </div>

              <div className='row ml-5 mr-5'>
                  <label htmlFor='comment'>Nombre</label>
                  <input type="text" name="name" id="name" className='form-control' value={nameState.name} onChange={updateStateName}/>
              </div>

              <div className="row ml-5 mr-5">
                  <label htmlFor='pais'>Pais</label>
                  <input type="text" name="pais" id="pais" className='form-control' value={paisState.pais} onChange={updateStatePais} />
              </div>

              <div className="row ml-5 mr-5">
                  <label htmlFor='comment'>Comentario</label>
                  <input type="text" name="coment" id="coment" className='form-control' value={comentState.coment} onChange={updateStateComment} />
              </div>

              <div className="row ml-5 mr-5">
                  <button className='btn btn-primary mt-3' onClick={() => sendCalification()}>Enviar comentario</button>
              </div>
        
    </div>


    </>
  )
}

export default Rating
