import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import Comments from '../reviews/Comments';

const Rating  = ({ addComment, commentsCount }) => {

    //const [mostrarSegundoComponente, setMostrarSegundoComponente] = useState(false)

    const [rating, setRating] = useState({ actualRating:0,})
    const [nameState, setNameState] = useState({name: ''})
    const [companyState, setCompanyState] = useState({companyName: ''})

    // setState() es, en la mayoria de los casos, una operación asincrónica
    const cambiarRating = async (value) => {
        console.log('El valor es -->', value)
        // con el await se pausa la operación hasta que finaliza la Promise
        await setRating({ actualRating: value });
        console.log(nameState);
        }


         const sendCalification = () => {
   
            const lastComentId = localStorage.getItem('baseCommenst');
            const newId = lastComentId ? parseInt('id') + 1 : 1;
            console.log('El newID es', newId);

            const newComment = {
                id: commentsCount + 1,
                name: nameState.name ,
                starts: rating.actualRating,
                company: {
                    name:companyState.companyName,
                }
            };
          

            addComment(newComment);

            setRating({ actualRating:0,});
            setNameState({name: ''});
            setCompanyState({companyName: ''})

            //setMostrarSegundoComponente(true)
            
    
            console.log("Sending...");
    
               
        }

        const updateStateName = (event) =>{
            setNameState({ name: event.target.value });
            console.log(event.target.value);
        }

        const updateStateCompany = (event) =>{
            setCompanyState({ companyName: event.target.value });
            console.log(event.target.value);
        };
        
        


  return (
    <>
    |<div className='card'>
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
                  <label htmlFor='comment'>Empresa</label>
                  <input type="text" name="enterprise" id="enterprise" className='form-control' value={companyState.companyName} onChange={updateStateCompany} />
              </div>

              <div className="row ml-5 mr-5">
                  <button className='btn btn-primary mt-3' onClick={() => sendCalification()}>Enviar comentario</button>
              </div>
        
    </div>


    </>
  )
}

export default Rating
