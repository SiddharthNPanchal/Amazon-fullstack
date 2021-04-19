import React, { useContext, useState } from 'react'
import { Link , useHistory} from 'react-router-dom'
// import data from "../data/data.js"
import '../styles/Products.css'
import displayProducts from "./DisplayProducts"
import storeDataContext from "../context/storeData"

export default function Products({category}) {
    let history = useHistory();
    // let [cat, setCat] = useState("")
    let [cat, setCat] = useContext(storeDataContext)
    const storeData = (category) =>{
      setCat(category)
      history.push("/products")
    }

    return (
        
        <div>

            <div className="category">
                <div>{category}</div>
                {/* {console.log(JSON.stringify(category))} */}
                <img src={require(`../assets/Products/${category.toLowerCase()}.jpg`).default} 
                style={{marginTop: '5px', width:"100%", height: '90%', cursor:"pointer"}} onClick={()=>storeData(category.toLowerCase())}> 
                </img>
            </div>
        </div>
        
    )
}
