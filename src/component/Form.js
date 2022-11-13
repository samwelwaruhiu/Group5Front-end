import React, { useState } from "react";



function Form() {

  const [newJob, setJob] = useState('');
  const [newOrganization, setOrganization] = useState('');
  const [newUrl, setUrl] = useState('');

  function handlePost(e){
    e.preventDefault();
    alert("Your Post will Reflect on the JOBS Section")
    fetch("http://localhost:9292/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "title" : `${newJob}`,
        "location": `${newUrl}`,
        "organization": `${newOrganization}`,
        "user_id" : "Admin.id"
      }),
    })

    setJob('');
    setOrganization('');
    setUrl('');
  }

  return (
    <div>
     <div class="form-container">
        <form action="#" id="form">
          <h1>Have a Job Vacancy? Feel free to POST on our website</h1>
          <input type="text" placeholder="Your Organization" id="name" onChange={(e) => setOrganization(e.target.value)}
        value = {newOrganization}/>
          <input type="text" name="Company URL" id="text" placeholder="www.safaricom/jobOffers.com " onChange={(e) => setUrl(e.target.value)}
        value = {newUrl}/>
          <input type="text" name="subject" id="subject" placeholder="Job Title" onChange={(e) => setJob(e.target.value)}
        value = {newJob}/>
          <button type="submit" id="submitButton" onClick={handlePost}>POSTJOB</button>
        </form>
      </div>
     </div>
  )
}

export default Form