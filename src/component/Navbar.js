export default function Navbar() {
    return <nav className = "nav">
        <a href = "/" className = "site-title">Jobs_For_Devs</a>
        <ul>
            <li>
                <a href ="/about">About</a>
            </li>
            <li className='active'>
                <a href ="/jobs">Jobs</a>
            </li>
        </ul>
    </nav>
}