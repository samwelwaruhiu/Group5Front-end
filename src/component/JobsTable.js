import React from 'react';
import { Link } from "react-router-dom";


function Jobs_Table({card}) {
  return (
    <div>
        <table class="table">
                <thead>
                    <tr>
                    <th scope="col">JOB NO</th>
                    <th scope="col">ORGANIZATION</th>
                    <th scope="col">JOB TITLE</th>
                    <th scope="col">JOB LINK</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">001</th>
                    <td>{card.organization}</td>
                    <td>{card.title}</td>
                    <a href={card.location}>Visit Site</a>
                    <Link to={`/:apply`}>
                    <button className='apply'>Apply Now!</button>
                    </Link>
                    </tr>
                </tbody>
               
            </table>
    </div>
  )
}

export default Jobs_Table