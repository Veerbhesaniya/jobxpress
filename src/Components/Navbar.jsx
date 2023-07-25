import React from 'react';
import "../StyleSheets/Navbar.css";
 const Navbar  = ({ screen, setScreen }) => {

  return (
    <>
      <div className='header'>
        <div className="navbar_logo">
          <h1 className='Logo'>job<span className='X_css'>X</span>press</h1>
        </div>
        <div className='PageName'>
          <h1 className='Page_name'>{screen}</h1>
        </div>
        <div className='Userprofile'>
          {screen == "Homepage" ? <h1 className='Logo'><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={{ height: "2em", width: "2em" }} /> Profile</h1> : ""}
          {screen == "Login" ? <button className='btn btn-outline-light' onClick={() => { setScreen("Registration") }}>SignUP</button> : ""}
          {screen == "Registration" ? <button className='btn btn-outline-light' onClick={() => { setScreen("Login") }}>Login</button> : ""}
        </div>
      </div>
    </>
  )
}
export default  Navbar;