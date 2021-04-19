import {React, useEffect, useState, useContext} from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/amazon-logo.png"
import search from "../assets/search.png"
import cart from "../assets/cart.png"
import Select from 'react-select';
import Search from './search';
import categoryContext from "../context/categoryContext"
import storeDataContext from "../context/storeData"
import "../styles/Header.css"
import data1 from "../data/data.js"

function Header() {

    const {categories} = useContext(categoryContext);
    const cats = [];
    const history = useHistory();
    let [cat, setCat] = useContext(storeDataContext);
    // useEffect(() => {
    //     console.log('dkcnjdnvd');
    //     console.log(data1)
    //     console.log(categories);
    //   }, [])

    useEffect(() => {
        categories.map(cat => {
            cats.push({value: cat.name, label: cat.name});
        })
        console.log('cats',cats);
    }, [categories]);

    const searchHandle = (value) => {
        
        setCat(value)
        history.push('/products')
        // history.push({
        //     pathname: '/products',
        //     aboutProps: {
        //       name: value, 
        //     },
        //   });
    }

    return (
        <div className="header">
            {/* Logo */}
            <div className="leftDiv">
                <img src={logo} className="logo" alt="Amazon Logo"/>
            </div>

            {/* Search Bar */}
            <div className="centerDiv">
                {/* <input type="text" className="search"/> */}
                <Select options={cats} placeholder='Search' className="search" onChange={(e) => searchHandle(e.value)}/>
                {/* <img src={search} className="searchlogo" alt="Amazon Logo"></img> */}
            </div>
            
            {/* {Hello, Sign Up, Return Orders} */}
            <div className="rightDiv">
            
                <div className="signInDiv">
                    <Link className="link" to={"/signup"}>
                    <span>Hello, </span><br/>
                    <span>sign&nbsp;In</span>
                    </Link> 
                </div>

                <div className="returnOrders">
                    <Link className="link" to={`/return-orders`}>
                    <span>Returns</span><br/>
                    <span style={{fontWeight:"bold"}}>{"&"}&nbsp;Orders</span>
                    </Link> 
                </div>

               <div className="cartItems">
                <Link className="link">   
                    <div style={{marginLeft: '4px', color: 'white'}}>0</div>
                    <FontAwesomeIcon icon={faCartPlus} size="1x" color="white"/> 
                </Link>
                </div>  
            </div>
        </div>
    )
}

export default Header;
