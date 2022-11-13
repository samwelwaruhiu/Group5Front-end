import React from "react";




function RecruiterC({card, handleDeletion,id}){


    return(
       
        <div className='card'>
          <h2 className='title'>JOB TITLE: {card.title}</h2>
          <h2 className='organization'>ORGANIZATION: {card.organization}</h2>
          <h2 className='link'>LINK: {card.location}</h2>
          <div className='btn'>
            <button className='delete' onClick={() => handleDeletion(id)}>Delete</button>
          </div>
        </div>
      
    )
}

export default RecruiterC;