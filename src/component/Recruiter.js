import React, { useEffect, useState } from "react";
import Form from "./Form";
import RecruiterC from "./RecruiterC";




function Recruiter(){

    const [cards, setCards] = useState([]);

useEffect(() => {
  fetch("http://localhost:9292/jobs")
  .then((response) => response.json())
    .then((cards) => {
      setCards(cards);
    })
    .catch((err) => console.log(err));
}, []);
  



function handleDeletion(id){
  setCards(cards.filter(card => card.id !== id))
  fetch(`http://localhost:9292/jobs/${id}`, {
    method: "DELETE",
  })
}

    return(
        <div>
            <Form/>
            <div>
            {cards.map(card => <RecruiterC key = {card.id} id = {card.id} card = {card} handleDeletion = {handleDeletion} />)}
        </div>
        </div>
    )
}

export default Recruiter;