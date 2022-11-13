import React from 'react'

function About() {

  return (
    <div className='container'>
        <h2 className='about-title  text-center'>About Us</h2>
        <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1'>
            <div className='col-md-4 col-12 mx-auto'>
                <div className="card">
                    <img className="card-img-top" src='https://hygger.io/wp-content/uploads/2018/10/2.png' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Management Team</h5>
                        <p className="card-text">We are happy to spear head the objectives of this company, we are tech minded.</p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-12 mx-auto'>
                <div className="card">
                    <img className="card-img-top" src='https://teambuildinghub.com/wp-content/uploads/2022/02/cartoon-office-1024x461.webp' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Development & Research Team</h5>
                        <p className="card-text">Are you a tech enthusiast! Let's save your worries on searching for job.</p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-12 mx-auto'>
                <div className="card">
                    <img className="card-img-top" src='https://blog.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Customer Relation Team</h5>
                        <p className="card-text">Share your stories and worries with us, we are customer minded.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

  )
}

export default About;