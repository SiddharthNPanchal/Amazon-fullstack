import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/amazon-logo.png"
import "../styles/signin.css"
function Signin() {

    
    // Email
    let [email, setEmail] = useState("")
    let [emailError, setEmailError] = useState({color:"black", display:"none"})
    let [emailBorder, setEmailBorder] = useState("inputText")
    let [emailErrorMessage, setEmailErrorMessage] = useState("")
    // Password
    let [password, setPassword] = useState("")
    let [passwordError, setPasswordError] = useState({color:"black", display:"none"})
    let [passwordBorder, setPasswordBorder] = useState("inputText")
    let [passwordErrorMessage, setPasswordErrorMessage] = useState("")

    const signup = ()=>{
        if(validate()){
            
        }
    }

    const validate = () => {
        
        let emailFlag = false;
        let passwordFlag = false;
    
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(email));
        if(email===""){
            setEmailError({color:"red", display:"block"})
            setEmailBorder("inputError")
            setEmailErrorMessage("Enter your email")
            emailFlag = false
            // return false
        }
        else if(re.test(email)===false){
            console.log(email)
            setEmailError({color:"red", display:"block"})
            setEmailBorder("inputError")
            setEmailErrorMessage("Enter valid email")
            emailFlag = false
        }
        else{
            setEmailError({color:"black", display:"none"})
            setEmailBorder("inputText")
            emailFlag = true
        }

        if(password===""){
            setPasswordError({color:"red", display:"block"})
            setPasswordBorder("inputError")
            setPasswordErrorMessage("Enter your password")
            passwordFlag = false
        }
        else if(password.length<6){
            setPasswordError({color:"red", display:"block"})
            setPasswordBorder("inputError")
            setPasswordErrorMessage("Password must be greater than 6 characters")
            passwordFlag = false
        }
        else{
            setPasswordError({color:"black", display:"none"})
            setPasswordBorder("inputText")
            passwordFlag = true
        }
        
        if(emailFlag && passwordFlag){
            alert("success")
        }
        else{
            return false
        }
    }

    return (

        <div>
            <div className="mainDiv">
                {/* Amazon Logo */}
                <img src={logo} className="logo" alt-text="Amazon Logo"/>
                <div className="container">
                        {/* <div></div> */}
                        <span style={{color:"black", marginLeft: "10px",  fontWeight:"bold", fontSize:"15px"}}>Login</span>
                        
                        
                        
                        {/* email */}
                        <span style={{color:"black", marginLeft: "10px",  fontWeight:"bold", fontSize:"10px", marginTop:"10px"}}>Email</span>    
                        <input value={email} onChange={e => {setEmail(e.target.value); setEmailBorder("inputText"); setEmailErrorMessage("")}} type="email" className={emailBorder}/>
                        
                        <span style={emailError}>{emailErrorMessage}</span>
                        {/* password */}
                        <span style={{color:"black", marginLeft: "10px",  fontWeight:"bold", fontSize:"10px", marginTop:"10px"}} >Password</span>    
                        <input value={password} onChange={e => {setPassword(e.target.value); setPasswordBorder("inputText"); setPasswordErrorMessage("")}} type="password" className={passwordBorder} placeholder="At least 6 characters"/>

                        <span style={passwordError}>{passwordErrorMessage}</span>
                        <button onClick={signup}>Create your amazon account</button>
                        <span style={{color:"black", marginLeft: "0px",  fontWeight:"bold", fontSize:"10px", marginTop:"0px", textAlign:"center"}}>Already a memmber? 
                        <Link className="login"
                            to="/login"
                        >  Sign In</Link>
                        </span>
                </div>
                    
            </div>
        </div>
    )
}

export default Signin
