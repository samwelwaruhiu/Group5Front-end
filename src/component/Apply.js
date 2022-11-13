import React from "react";

function Apply(){
    return(
       <div>
        
        <div class="form-container">
        <h1>FILL THE FORM TO SECURE YOUR DREAM JOB</h1>
        <form action="#" id="form">
          <h1>Job Application form</h1>
          
          <input type="text" placeholder="Your Name" id="name"/>
          <input type="email" name="email" id="email" placeholder="johndoe@example.com"/>
          <input type="tel" name="tel" id="tel" placeholder="+254 "/>
          <div class="form-group">
          <label for="exampleFormControlFile1">UPLOAD CV</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
          </div>
          <button type="submit" id="submitButton">SUBMIT JOB APPLICATION</button>
        </form>
      </div>
        </div>
    )
}

export default Apply;