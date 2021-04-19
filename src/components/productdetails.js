import React, {useContext, useEffect, useState} from 'react'
import {Link,useLocation, useHistory} from "react-router-dom";
import "../styles/Productdetails.css"

import productContext from "../context/productContext"
import storeProductContext from "../context/StoreProduct"

export default function Productdetails() {
    let [prod, setProd] = useContext(storeProductContext);
    const {products} = useContext(productContext);

    // let [productName, setProductName] = useContext(storeProductContext);
    let history = useHistory();
    // const location = useLocation();

    useEffect(()=>{
        
        console.log(prod)
    },[])

    // console.log(location.aboutProps.product)
        return (
        <div className="details">
            <p>Hi</p>
            {/* image */}
            <div className="imageDiv">
            <img src={require(`../assets/Products/${prod.name}.jpg`).default} 
                style={{marginTop: '5px', width:"100%", height: '70%'}}>
            </img>
            </div>
            {/* description */}
            <div className="descDiv">
                <div>{prod.name}</div>
                <div className="item">${prod.price}</div>
                <div className="item">{prod.desc}</div>
                <div className="item">{prod.bestSeller == true ? "This product is a best seller" : ""}</div>
                <br/>
                <div><label>Quantity <select name="Qty" id="qty">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="4">5</option>
                    </select>
                    </label>
                </div>
                <div className="item"><button>Add to cart</button></div>
            </div>
        </div>
    )
}
