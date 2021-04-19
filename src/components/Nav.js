import {React, useEffect, useState, useContext} from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import "../styles/Nav.css"
import storeDataContext from "../context/storeData"
import categoryContext from "../context/categoryContext"

function Nav() {

    const {categories} = useContext(categoryContext);

    let [cat, setCat] = useContext(storeDataContext);
    let history = useHistory();

    const storeCategory = (type) =>{
        setCat(type)
        history.push("/products")
    }

    return (
        <div className="Nav">
            <div class="grid-item" style={{fontSize:"smaller", textAlign:"left"}}>Hello
            </div>
            <div class="grid-item" onClick={()=> history.push("/bestsellers")}>Best Seller</div>
            <div class="grid-item">
             {
                 categories.map(cat =>{
                     return(
                        <span style={{cursor:"pointer"}} onClick={() => storeCategory(cat.name)}>{cat.name}</span> 
                     )
                 })
             }
            </div>
            <div class="grid-item">New deals everyday
            </div>

        </div>
    )
}

export default Nav
