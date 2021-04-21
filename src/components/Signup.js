import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/amazon-logo.png"
import "../styles/signin.css"
function Signin() {

    // Name
    let [name, setName] = useState("")
    let [nameError, setNameError] = useState({color:"black", display:"none"})
    let [nameBorder, setNameBorder] = useState("inputText")
    let [nameErrorMessage, setNameErrorMessage] = useState("")
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
    // Re-password
    let [repeatPassword, setRepeatPassword] = useState("")
    let [repeatPasswordError, setRepeatPasswordError] = useState({color:"black", display:"none"})
    let [repeatPasswordBorder, setRepeatPasswordBorder] = useState("inputText")
    let [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] = useState("")
    const signup = ()=>{
        if(validate()){
            fetch("http://localhost:8080/signup",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: JSON.stringify({
                      name: name,
                      email: email,
                      password: password
                  })
            }).then(res=>{
                if(res.status === 200){
                    console.log(res)
                    alert("Account creation successful")
                    window.location.href = "http://localhost:3000/login";
                }
                else{
                    alert("Email id already exists")
                }
            }).catch(err=>console.log(err))
        }
    }

    const validate = () => {
        let nameFlag = false;
        let emailFlag = false;
        let passwordFlag = false;
        let repeatFlag = false

        if(name===""){
            setNameError({color:"red", display:"block"})
            setNameBorder("inputError")
            setNameErrorMessage("Enter your name")
            nameFlag = false
        }
        else{
            setNameError({color:"black", display:"none"})
            setNameBorder("inputText")
            nameFlag = true
        }
       
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
            // setEmail()
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
        if(repeatPassword===""){
            setRepeatPasswordError({color:"red", display:"block"})
            setRepeatPasswordBorder("inputError")
            setRepeatPasswordErrorMessage("Enter your password again")
            repeatFlag = false
        }
        else{
            setRepeatPasswordError({color:"black", display:"none"})
            setRepeatPasswordBorder("inputText")
            repeatFlag = true
        }
        if(nameFlag && emailFlag && passwordFlag && repeatFlag){
            if(password === repeatPassword){
                return true
            }
           alert("Both password must match");
           return false;
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
                        <span style={{color:"black", marginLeft: "10px",  fontWeight:"bold", fontSize:"15px"}}>Create Account</span>
                        {/* Name */}
                        <span style={{color:"black", marginLeft: "10px",  fontWeight:"bold", fontSize:"10px", marginTop:"10px"}}>Your Name</span>    
                        <input value={name} onChange={e => {setName(e.target.value); setNameBorder("inputText"); setNameErrorMessage("")}} type="text" className={nameBorder}/>
                        
                        <span style={nameError}>{nameErrorMessage}</span>
                        {/* email */}
                        <span style={{color:"black", marginLeft: "10px",  fontWeight:"bold", fontSize:"10px", marginTop:"10px"}}>Email</span>    
                        <input value={email} onChange={e => {setEmail(e.target.value); setEmailBorder("inputText"); setEmailErrorMessage("")}} type="email" className={emailBorder}/>
                        
                        <span style={emailError}>{emailErrorMessage}</span>
                        {/* password */}
                        <span style={{color:"black", marginLeft: "10px",  fontWeight:"bold", fontSize:"10px", marginTop:"10px"}} >Password</span>    
                        <input value={password} onChange={e => {setPassword(e.target.value); setPasswordBorder("inputText"); setPasswordErrorMessage("")}} type="password" className={passwordBorder} placeholder="At least 6 characters"/>
                        
                        <span style={passwordError}>{passwordErrorMessage}</span>
                        {/* re-password */}
                        <span style={{color:"black", marginLeft: "10px",  fontWeight:"bold", fontSize:"10px", marginTop:"10px"}}>Re-enter password</span>    
                        <input value={repeatPassword} onChange={e => {setRepeatPassword(e.target.value); setRepeatPasswordBorder("inputText"); setRepeatPasswordErrorMessage("")}} type="password" className={repeatPasswordBorder}/>
                        
                        <span style={nameError}>{repeatPasswordErrorMessage}</span>

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
