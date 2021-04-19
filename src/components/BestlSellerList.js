
import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation, useHistory, Redirect } from 'react-router-dom'
import data from "../data/data.js"
import storeProductContext from "../context/StoreProduct"

function BestlSellerList({product}) {

    let history = useHistory();
    let [prod, setProd] = useContext(storeProductContext);
    const details = (product) =>{
        setProd(product)
        history.push('/products-details');
    }

    return (
        <div className="bestSellerList">
            {console.log(JSON.stringify(product.name))}
            <ul style={{marginLeft:"20px"}}>
            <div style={{height:"60px"}}>{product.name}</div>
            {/* {name} */}
            <div>
                <img src={require(`../assets/Products/${product.name}.jpg`).default} 
                        style={{marginTop: '5px', height:"240px", cursor:'pointer'}} onClick={() => details(product)}>
                </img>
            </div>
            {console.log(JSON.stringify(product.name))}
                    
            </ul>        
        </div>
    )
}

export default BestlSellerList
