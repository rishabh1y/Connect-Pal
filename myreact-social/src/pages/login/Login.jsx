import React, { useContext } from 'react'
import "./login.css"
import { useRef } from 'react';
import {loginCall} from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext"
// import CircularProgress from "@mui/material/CircularProgress/CircularProgress"

export default function Login() {
  
    const email =  useRef();
    const password = useRef();  
    const {user, isFetching , error, dispatch} = useContext(AuthContext);

    const handleClick = (e)=>{
        
          e.preventDefault();
        loginCall({email:email.current.value , password:password.current.value},
            dispatch
            );

    };

    console.log(user);

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
                    <input placeholder='Email' type="email" required className="loginInput" ref = {email} />
                    <input placeholder='Password' type="password" required className="loginInput" minLength="6" ref={password}/>
                    <button className="loginButton" type='submit' disabled={isFetching}>{isFetching ? "loading": "Log In"}</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">
                    {isFetching ? "loading": "Create a New Account"}
                        </button>
                </form>
            </div>
        </div>

     </div>

    </>
  )
}






// {
//     "username" : "Ayush",
//     "email"  : "ayush2@gmail.com",
//     "password" : "958451"
// }

// {
// username : "shubham "
// email  : shubham1@gmail.com
// password:shubham
// }