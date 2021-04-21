import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft ,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import img1 from "../assets/caraousel/img1.jpg"
import img2 from "../assets/caraousel/img2.jpg"
import img3 from "../assets/caraousel/img3.jpg"
import Product from './products'
import productContext from "../context/productContext"
import categoryContext from "../context/categoryContext"
import "../styles/Promo.css"
// import data from '../data/data'
function Promo() {

    const {products} = useContext(productContext);
    const {categories} = useContext(categoryContext)
    let [random,setRandom] = useState(0);
    
    const img = [img1, img2 , img3];
    let [cnt, setCnt] = useState(0);
   
    const leftClick = () =>{
        
        if(cnt>0){
           setCnt(--cnt);
        }else{
            setCnt(2);
        }
        
    }

    const rightClick = () =>{
        
        if(cnt<2){
            setCnt(++cnt)
        }   else{
            setCnt(0);
        }
    }

    return (
        <div  className="promo" style={{backgroundImage: `url(${img[cnt]})`}}>   
            <div className="arrow">
                <div className="leftArrow">
                 <FontAwesomeIcon icon={faArrowLeft} size="2x" color="white" onClick={leftClick}/> 
                </div>
                
                <div className="rightArrow">
                 <FontAwesomeIcon icon={faArrowRight} size="2x" color="white" onClick={rightClick}/>
                </div>
            </div>
            
            <div className="categories">
                {categories.map(product=> {
                    console.log("prodcuct "+ product)
                    return <Product category={product.name}/>
                })}
            </div>  
           
        </div>
    )
}

export default Promo
