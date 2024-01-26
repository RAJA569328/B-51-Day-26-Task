import React from "react";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link  to='/All' className="nav-link"  href="#" style={{color:'black',fontWeight:'1000'}}> ALL </Link>
                </li>
                <li className="nav-item">
                    <Link to='/FSD' className="nav-link" href="#" style={{color:'black',fontWeight:'1000'}}> FULL STACK DEVELOPMENT </Link>
                </li>
                <li className="nav-item">
                    <Link to='/DataScience' className="nav-link" href="#" style={{color:'black',fontWeight:'1000'}}> DATA SCIENCE </Link>
                </li>
                <li className="nav-item">
                    <Link to='/CyberSecurity' className="nav-link" href='#' style={{color:'black',fontWeight:'1000'}}> CYBER SECURITY </Link>
                </li>
                <li className="nav-item">
                    <Link to='/Career' className="nav-link" href='#' style={{color:'black',fontWeight:'1000'}}> CAREER </Link>
                </li>
            </ul>
        </>
    );
}

export default NavBar;
