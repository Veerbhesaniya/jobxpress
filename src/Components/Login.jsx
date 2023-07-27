import React, { useState } from 'react'
// import Navbar from './Navbar'
import { Link } from 'react-router-dom';
function Login() {
	let [input   , setInput ] = useState({
    username :"",
    password : ""
  });
  const [data  , setData] = useState({});
  const setLoginpage =  (e) =>{
  const  {name , value} = e.target;
  setInput((items) =>{
    return {
      ...items  , [name] : value      
    }
  })
  }
  const handlesubmit = () => 
  {
    setData({...input});
  }
  let user  =  localStorage.getItem("user_"+data.username);
  if (user === data.username) {
    localStorage.setItem("user_id" , user);
    // setScreen("Homepage");
  }

   return (
    <>
        <div className='Registration_Form'>
        <div className='Form'>
          <div  className='loginslib'>
            <input type="text"  placeholder='Username' onChange={(e) =>setLoginpage(e)} name='username'/>
          </div>
          <div  className='loginslib'>
            <input type="password" placeholder='Password' onChange={(e) =>setLoginpage(e)} name='password'/>
          </div>
       <Link to="/homepage">
          <button className='btnsubmit' onClick={()=>handlesubmit()}>Submit</button>
       </Link>
        </div>

      </div>
    </>
  )
}

export default Login