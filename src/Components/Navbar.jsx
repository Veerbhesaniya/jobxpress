import React from 'react';
import "../StyleSheets/Navbar.css";
import { NavLink  , Outlet} from 'react-router-dom';
const Navbar  = () => {

  return (
    <>
      <div className='header'>
        <div className="navbar_logo">
          <h1 className='Logo'>job<span className='X_css'>X</span>press</h1>
        </div>
        <div className='PageName'>
          <h1>Hello</h1>
        </div>
        <div className='Userprofile'>
          <NavLink to="homepage">homepage</NavLink>
          <NavLink to="login">login</NavLink>
          <NavLink to="singup">singUp</NavLink>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}
export default  Navbar;