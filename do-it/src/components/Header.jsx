import React from 'react'
import {Link}from 'react-router-dom'
import { AuthContext } from '../context/auth';
import { useContext } from 'react';
function Header() {
    const loginAuth=useContext(AuthContext)
    
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
    <div className="container">
        <div className="row">
            <nav className="navbar navbar-expand-lg">
                <div className="navbar-brand ms-2 fs-2 fw-bold text-black" >LETS DO-IT</div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        {loginAuth.isAuth && 
                        <>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/welcome">Home</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li></>
                        }
                    </ul>
                </div>
                <ul className="navbar-nav">
                    {!loginAuth.isAuth &&<li className="nav-item fs-5"><Link className="nav-link" to="/">Login</Link></li>}
                    {loginAuth.isAuth && <li className="nav-item fs-5"><Link className="nav-link" to="/" onClick={()=>{loginAuth.setisAuth(false)}}>Logout</Link></li>}
                </ul>
            </nav>
        </div>
    </div>
</header>

  )
}

export default Header