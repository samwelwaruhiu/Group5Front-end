import React from "react";
import { Link } from "react-router-dom";


function JobsTable({ cards }) {
  console.log(cards);

  const vuu = cards.map((card) => {
    return (
      <tr>
        <td>{card.id}</td>
        <td>{card.organization}</td>
        <td>{card.title}</td>
        <td>
          {" "}
          <Link to={`/:apply`}>
            <button className="apply">Apply Now!</button>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table class="table">
        <tr>
          <th>JOB NO</th>
          <th>ORGANIZATION</th>
          <th>JOB TITLE</th>
          <th>JOB LINK</th>
        </tr>
        {vuu}
      </table>

      {/* 
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
                    <th scope="row">{card.id}</th>
                    <td>{card.organization}</td>
                    <td>{card.title}</td>
                    <a href={card.location}>Visit Site</a>
                    <Link to={`/:apply`}>
                    <button className='apply'>Apply Now!</button>
                    </Link>
                    </tr>
                </tbody>
               
            </table> */}
    </div>
  );
}

export default JobsTable;
