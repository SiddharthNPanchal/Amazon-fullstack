import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/amazon-logo.png"
// import localStorage from "local-storage"
// import sessionStorage from "session-storage"
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
    let [loginError, setLoginError] = useState(0)

    const login = ()=>{
        if(validate()){
            fetch("https://amazon-miniapi.herokuapp.com/login",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body:JSON.stringify({
                      email: email,
                      password: password
                  })
            }).then(res=>{
                console.log(res)
                if(res.status==200){
                    return res.json()      
                }
                else{
                  setLoginError(401)
                }
            }).then(res=>{
                    console.log(res)
                    if(res==undefined){
                        alert("Enter valid credentials")
                    }
                    else{
                        sessionStorage.setItem("name",  res[0].name)
                        sessionStorage.setItem("email",  res[0].email)                    
                        alert(`Welcome, ${res[0].name}`)
                        window.location.href = "http://localhost:3000"
                    }
                
            }).catch(err=>alert(err))
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
            return true
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
                        <button onClick={login}>Login</button>         
                </div>             
            </div>
        </div>
    )
}

export default Signin
