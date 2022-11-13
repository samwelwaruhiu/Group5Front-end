import React from 'react'

function Jobs_Table() {
  return (
    <div>
        <table class="table">
                <thead>
                    <tr>
                    <th scope="col">JOB NO</th>
                    <th scope="col">COMPANY</th>
                    <th scope="col">JOB TITLE</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default Jobs_Table