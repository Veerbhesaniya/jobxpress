import React, { useState } from 'react'
// import Navbar from './Navbar';
import "../StyleSheets/Reg.css";
// import { json } from 'express';
function Empregistration({ screen, setScreen }) {
  const [details, setDetails] = useState({
       ID   : parseInt(Date.now() * Math.random()),
       CompanyName :"",
       Email :"",
       Password :"",
       Phone :"",
       Address :"",
      Description :"",
  });
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    const newObject = {
      username: details.username,
      password: details.password,
      email: details.email
    };
    setData([...data, newObject]);
    // setDetails({ username: "", password: "", email: "" });
  }
  const getInforamtion = (e) => {
    let { name, value } = e.target;
    setDetails((props) => {
      return { ...props, [name]: value }
    })
  }
  data.map((item, i) => {
    localStorage.setItem("user_" + item.username, data[i]?.username);
    localStorage.setItem("pass_" + item.password, data[i]?.password);
  })
  
  // localStorage.clear();
  return (
    <>
      <div className='Registration_Form'>
        <form action=""  >
      <h1 style={{textAlign:"center"}}>Employee Registration </h1>
          <div className='Form'>
            <div  className='slib'>
              <input type="text" placeholder='CompanyName' onChange={(e) => getInforamtion(e)} value={details.CompanyName} name='CompanyName' />
            </div>
            <div  className='slib'>
              <input type="text" placeholder='Email' onChange={(e) => getInforamtion(e)} value={details.Email} name='Email' />
            </div>
            <div  className='slib'>
              <input type="password" placeholder='Password' onChange={(e) => getInforamtion(e)} value={details.Password} name='Password' />
            </div>
            <div  className='slib'>
              <input type="text" placeholder='Phone' value={details.Phone} onChange={(e) => getInforamtion(e)} name='Phone' />
            </div>
            <div  className='slib'>
              <textarea type="" placeholder='Address' value={details.Address} onChange={(e) => getInforamtion(e)} name='Address' />
            </div>
            <div  className='slib'>
              <textarea type="text" placeholder='Description' value={details.Description} onChange={(e) => getInforamtion(e)} name='Description' />
            </div>
            <button type='submit' name='subbtn' className='btnsubmit' onClick={() => handleSubmit()}>Submit</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Empregistration