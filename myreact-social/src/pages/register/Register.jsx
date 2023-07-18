import React, { useRef } from 'react'
import "./register.css"
import axios from 'axios';
import {useNavigate} from "react-router-dom"

export default function Register() {
    const email =  useRef();
    const password = useRef();  
    const username = useRef();
    const passwordAgain = useRef();
    const history = useNavigate()
    

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords don't match")
        }
        else{
            const user = {
                username: username.current.value, 
                email: email.current.value,
                password: password.current.value,
            }
            try{
                 await axios.post("/auth/register", user);
                 history("/login")

            }
            catch(err){
                console.log(err);
            }
           
        }

    }

  return (
    <>


     <div className="login">

        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    Connect-Pal
                </h3>
                <span className="loginDesc">Connect with friends and world around you</span>
            </div>

            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder='Username' required ref={username} className="loginInput" />
                    <input placeholder='Email' ref={email} required  type="email" className="loginInput" minLength="6"/>
                    <input placeholder='Password' ref={password} required type="password" className="loginInput" />
                    <input placeholder='Confirm Password' ref={passwordAgain} required type="password" className="loginInput" />
                    <button className="loginButton" type="submit">Sign up</button>
                    <button className="loginRegisterButton">Login to your Account</button>
                </form>
            </div>
        </div>

     </div>

    </>
  )
}
