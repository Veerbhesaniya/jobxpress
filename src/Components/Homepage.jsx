import React from 'react'
import Navbar from '../Components/Navbar';
export default function Homepage({ screen, setScreen }) {
return (
  <>
   <Navbar screen = {screen} setScreen={setScreen}/>
    <button className='btn btn-primary' onClick={() =>{
  localStorage.removeItem("user_id");
  setScreen("Login");
}}>LOgout</button>
  </>
)
}
