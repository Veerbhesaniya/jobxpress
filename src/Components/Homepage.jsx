import React from 'react'
import Navbar from '../Components/Navbar';
// import {BrowserRouter, Router , Route} from  "react-router-dom";
export default function Homepage() {
return (
  <>
   {/* <Navbar screen = {screen} setScreen={setScreen}/>  */}
   <h1>Homepage</h1>  
    <button className='btn btn-primary' onClick={() =>{
  localStorage.removeItem("user_id");
  // setScreen("Login");
}}>LOgout</button>
  </>
)
}
