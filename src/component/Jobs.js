import JobsTable from "../component/JobsTable"

export default function Jobs () {
    return(
        <>
         <div className='container'>
            <h2 className='about-title  text-center'> Jobs Board</h2>
            <div className="jobs-div">
                <img className="jobs-img img-fluid" src='https://batch-connect.segwik.com/uploads/cmsimages/page_bg/57145_bgimg.png' alt="" />
            </div>
            <div className="job-title">Available Jobs.</div> 
            <JobsTable />
         </div>

        </>
    )
}
