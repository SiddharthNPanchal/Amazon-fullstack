import React from 'react'
import productContext from "../context/productContext"
import data from "../data/data"
import  { useState, useEffect, useContext } from 'react'
import BestlSellerList from "./BestlSellerList"
import '../styles/Bestseller.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft ,faArrowRight} from '@fortawesome/free-solid-svg-icons'


function Bestseller() {

    const {products} = useContext(productContext)
    const [bestSeller, setBestSeller] = useState([])

    return (
        <div>
            <h3 style={{marginLeft: "20px", fontFamily:'sans-serif'}}>Best sellers</h3>
            <div className="bestseller">    
            
            {/* <div className="seller"> */}
                {
                    products.map(seller=>{
                        if(seller.bestSeller===true){
                            return <BestlSellerList product={seller}/>
                            console.log(seller) 
                        }  
                    })
                }
                {/* </div> */}
                {/* <div className="arrow1">
                <div className="leftArrow">
                 <FontAwesomeIcon icon={faArrowLeft} size="2x" color="black" /> 
                </div>
                
                <div className="rightArrow">
                 <FontAwesomeIcon icon={faArrowRight} size="2x" color="black" />
                </div>
            </div> */}
            
        </div>
        </div>
        
    )
}

export default Bestseller
