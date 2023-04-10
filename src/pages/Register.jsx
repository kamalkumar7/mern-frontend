import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

export const Register = () => {
    const dispatch = useDispatch();
    dispatch(logout());
    const [userData, setuserData] = useState({ firstName: '', lastName: '', middleName: '', orgName: '', GstNo: '', Address: '',email:'',password:'',mobileNo:'' });

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            if(!userData.email || !userData.password || !userData.GstNo || !userData.Address || !userData.firstName  || !userData.lastName || !userData.mobileNo)
            {
                window.alert("Please Enter all details")
            }
            const res = await  axios.post("http://13.231.177.206:8000/auth/signup",userData);
          
           if(res.status ===200 )
           {
            changeURL();
           }

        } catch (error) {
            window.alert("Email already registered")
        }
 
    }
const navigate = useNavigate();
    const changeURL = ()=>{
        navigate('/login')
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>

            
            <label htmlFor="fname">First Name</label>
            <input value={userData.firstName} name="fname" onChange={(e) => setuserData({...userData,firstName:e.target.value})} id="fname" placeholder="First Name" />
        
            <label htmlFor="lname">Last name</label>
            <input value={userData.lastName} name="mname" onChange={(e) => setuserData({...userData,lastName:e.target.value})} id="lname" placeholder="Last Name" />
        
            <label htmlFor="mname">Middle Name</label>
            <input value={userData.middleName} name="lname" onChange={(e) => setuserData({...userData,middleName:e.target.value})} id="mname" placeholder="Middle Name" />
        
            <label htmlFor="org">Organisation  Name</label>
            <input value={userData.orgName} name="org" onChange={(e) => setuserData({...userData,orgName:e.target.value})} id="org" placeholder="Organisation Name" />
        
            <label htmlFor="gst">GST Number</label>
            <input value={userData.GstNo} name="GstNo" onChange={(e) => setuserData({...userData,GstNo:e.target.value})} id="GstNo" placeholder="GST Number" />

            <label htmlFor="Address">Address</label>
            <input value={userData.Address} name="Address" onChange={(e) => setuserData({...userData,Address:e.target.value})} id="Address" placeholder="Adress" />

            <label htmlFor="mob">Mobile Number</label>
            <input value={userData.mobileNo} name="mob" onChange={(e) => setuserData({...userData,mobileNo:e.target.value})} id="mob" placeholder="Mobile Number" />

            <label htmlFor="email">email</label>
            <input value={userData.email} onChange={(e) => setuserData({...userData,email:e.target.value})}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        
            <label htmlFor="password">password</label>
            <input value={userData.password} onChange={(e) => setuserData({...userData,password:e.target.value})} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={changeURL} >Already have an account? Login here.</button>
    </div>
    )
}