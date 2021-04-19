import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Footer.css"

function Footer() {
    const backtotop = () =>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const profile = () =>{
        alert("Check out my profiles! Thank you.")
    }
    return (
        <div className="maindiv">
            <div className="top" style={{textAlign:"center", color:"white", cursor:"pointer"}}  onClick={backtotop}>
                <span>Back to top</span>
            </div>
            <div className="items">
                <div className="subitem">
                    <span>Get to know us</span>
                    <br/>
                    <span>Careers</span>
                    <br/>
                    <span>Amazon and our planet</span>
                    <br/>
                    <span>investor relations</span>
                </div>

                <div className="subitem">
                    <span>Make money with us</span>
                    <br/>
                    <span>Sell on amazon</span>
                    <br/>
                    <span>Amazon associates</span>
                    <br/>
                    <span>Adevrtise your associates</span>
                </div>

                <div className="subitem">
                    <span>Amazon payment products</span>
                    <br/>
                    <span>Shop with points</span>
                    <br/>
                    <span>Gift cards</span>
                    <br/>
                    <span>Amazon cash</span>
                </div>
                <div className="subitem">
                    <span onClick={profile}>Siddharth Panchal</span>
                    <br/>
                    <a href="https://www.linkedin.com/in/siddharthpanchal3010/"><span>LinkedIn</span></a>
                    <br/>
                    <a href="https://github.com/SiddharthNPanchal/"><span>GitHub</span></a>
                    <br/>
                    <a href="https://www.instagram.com/i_siddharthpanchal/"><span>Instagram</span></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
