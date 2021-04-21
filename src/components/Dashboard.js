import React from 'react'
import logo from "../assets/amazon-logo.png"
import "../styles/signin.css"

function Dashboard() {
    function logout(){
        sessionStorage.clear();
        window.location.href = "http://localhost:3000"
    }
    return (
        <div>
            <div className="mainDiv">
                {/* Amazon Logo */}
                <img src={logo} className="logo" alt-text="Amazon Logo"/>
                <div className="container">
                        {/* <div></div> */}
                        <span style={{color:"black", marginLeft: "10px",  fontWeight:"bold", fontSize:"15px"}}>Welcome</span>
                        
                        
                        
                        {/* email */}
                        <span style={{color:"black", marginLeft: "10px",  fontWeight:"bold", fontSize:"10px", marginTop:"10px"}}>Username</span>    
                        <input className="inputText" value={sessionStorage.getItem('name')}/>
                        
                        
                        {/* password */}
                        <span style={{color:"black", marginLeft: "10px",  fontWeight:"bold", fontSize:"10px", marginTop:"10px"}} >Email</span>    
                        <input className="inputText" value={sessionStorage.getItem('email')}/>

                        
                        <button onClick={logout}>Logout</button>         
                </div>             
            </div>
        </div>
    )
}

export default Dashboard
