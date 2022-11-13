import React from "react";


function Search({handleSearch}){
  return(
      <div className='searchbar-container'>
                <h1>Search for a Job</h1>
                <input type='text' className='search' placeholder='Job title or keyword' onChange={handleSearch} />
                <button>Search</button>
            </div>
  )
    
}

export default Search;