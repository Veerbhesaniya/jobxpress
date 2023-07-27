import React, { useState } from 'react'
// import Navbar from '../Components/Navbar';
import "../StyleSheets/Reg.css";

function Userregistraton() {
    const [details, setDetails] = useState({
        ID : parseInt(Date.now() * Math.random()),
        FullName  : "",
        Email  : "",
        Password  : "",
        Phone  : "",
        Address  : "",
        Skills  : [],
        Experience  : "",
        Education  : ""
    });
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e?.preventDefault();
        const newObject = {
            FullName: details.FullName,
            Password: details.Password,
            Email: details.Email,
            Phone: details.Phone,
            Address: details.Address,
            Skills: details.Skills,
            Experience: details.Experience,
            Education: details.Education,
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
         {/* ID : parseInt(Date.now() * Math.random()),
        Name  : "",
        Email  : "",
        Password  : "",
        Phone  : "",
        Address  : "",
        Skills  : "",
        Experience  : "",
        Education  : "", */}
            {/* <Navbar screen={screen} setScreen={setScreen} /> */}
            <div className='Registration_Form'>
                <form action="" onSubmit={() => setDataOnServer()}>
                    <h1 style={{textAlign:"center"}}>JobSeekr`s Registration</h1>
                    <div className='Form'>
                        <div className='slib'>
                            <input type="text" placeholder='FullName' value={details.FullName} onChange={(e) => getInforamtion(e)} name='FullName' />
                        </div>
                        <div  className='slib'>
                            <input type="text" placeholder='Email' onChange={(e) => getInforamtion(e)} value={details.Email} name='Email' />
                        </div>
                        <div  className='slib'>
                            <input type="text" placeholder='Phone' onChange={(e) => getInforamtion(e)} value={details.Phone} name='Phone' />
                        </div>
                        <div  className='slib'>
                            <textarea type="text" placeholder='Address' onChange={(e) => getInforamtion(e)} value={details.Address} name='Address' />
                        </div>
                        <div  className='slib'>
                            <input type="text" placeholder='Skills' onChange={(e) => getInforamtion(e)} value={details.Skills} name='Skills' />
                        </div>
                        <div  className='slib'>
                            <input type="text" placeholder='Experience' onChange={(e) => getInforamtion(e)} value={details.Experience} name='Experience' />
                        </div>
                        <div  className='slib'>
                            <input type="text" placeholder='Education' onChange={(e) => getInforamtion(e)} value={details.Education} name='Education' />
                        </div>
                        <div  className='slib'>
                            <input type="password" placeholder='Password' value={details.Password} onChange={(e) => getInforamtion(e)} name='Password' />
                        </div>

                        <button type='submit' name='subbtn' className='btnsubmit' onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Userregistraton