import Userregistration from "./User_Registration";
import Empregistration from "./Emp_Registration";
import Navbar from "./Navbar";
import "../StyleSheets/Slider.css";
import React from "react";
import { useState } from "react";
const Slider = ({screen , setScreen}) => {
   const [show , setShow] = useState("user"); 
   let [classs, setClass] = useState("clr");
   let [cls, setCls] = useState();
    const  slide = () =>{
        switch (show) {
            case "user":
                   return <Userregistration  />
                break;
                case "emp":
                   return <Empregistration/>
                break;
            }
        }
        return (
            <>
        
        {/* <Userregistration/> */}
      <Navbar screen={screen} setScreen={setScreen} />
            <div className="sliderbox">
                <div className="content">
                    <div className=  {`btnslide one  ${cls} `}  onClick={() =>{ setShow("user") ;setClass("clr"); setCls("");}}>User</div>
                    <div className={`two ${classs}`} onClick={() =>  {setShow("emp") ; setClass(""); setCls("clremp") }}>Employee</div>
                </div>
            </div>
            <div>
                {slide()}
            </div>
        </>
    )
}
export default Slider;