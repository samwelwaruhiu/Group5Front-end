import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return <nav className = "nav">
        <a href = "/" className = "site-title">Jobs_For_Devs</a>
        <Link to= '/'>Home</Link>
      <Link to= '/recruiter'>Recruiter</Link>
        
    </nav>
}