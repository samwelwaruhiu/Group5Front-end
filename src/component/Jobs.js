import JobsTable from "../component/JobsTable"
import React, { useEffect, useState } from "react";
import Search from "./Search";


export default function Jobs () {

    const [cards, setCards] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/jobs")
        .then((response) => response.json())
          .then((cards) => {setCards(cards);
            setSearchQuery(cards);
          })
          .catch((err) => console.log(err));
      }, []);

      function handleSearch(e) {
        setCards(
          searchQuery.filter((cards) => {
            return (cards.title
              .toLowerCase()
              .includes(e.target.value.toLowerCase()))
          })
        );
        return cards
      }
  
    return(
        <>
         <div className='container'>
            <Search handleSearch={handleSearch}/>
            <div className="jobs-div">
                <img className="jobs-img img-fluid" src='https://batch-connect.segwik.com/uploads/cmsimages/page_bg/57145_bgimg.png' alt="" />
            </div>
            <div className="job-title">Available Jobs.</div> 
            {/* {cards.map(card => <JobsTable key = {card.id} id = {card.id} card = {card}/>)} */}
            <JobsTable cards ={cards}/>
         </div>

        </>
    )
}
