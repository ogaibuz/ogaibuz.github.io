import'./comments.css'

const Comments = ({ comments }) => {

      return (
        <>
            
            <div className='card' >
                <div className="card-body">
                    <h5 className="card-title">
                        Comentarios de nuestros usuarios
                    </h5>
                </div>
                
                    <ul>
                    {
                        // console.log('Comentarios de nuestros usuarios', comments)
                        // con los métodos estáticos floor() y random() de la clase Math, 
                        // muestro un valor aleatorio del uno al cinco

                        comments.map((comment) => {
                             return (
                              <li key={comment.id}>
                                  <strong> { comment.name } </strong>
                                  from <i>{ comment.otros.pais }, </i><br/>
                                  <i>"{ comment.otros.coment } " </i> <br/>
                                  <strong> starts { comment.starts }<hr/>
                                  </strong>
                              </li>
                            
                             )
                        })
                        
                    }
                </ul> 
                
            
            </div>
            
      </>
    )
  }


export default Comments