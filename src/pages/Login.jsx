import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice.js";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const res =  await axios.post('http://localhost:800/auth/signin',{
                email,password
            })

            if(res.status ===200)
            {
                    dispatch(loginSuccess(res.data));
                    // window.alert("done login");
                    changeURL();
    
            }
    
        } catch (error) 
        {
              window.alert("Wrong credentials or User not found")  
        }    
    }
    const changeURL = ()=>{

        navigate('/profile')
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => navigate('/')}>Don't have an account? Register here.</button>
        </div>
    )
}