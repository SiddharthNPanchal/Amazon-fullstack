import React, { useEffect, useState, useContext } from 'react'
import "../styles/ProductList.css"
import { Link, useLocation, useHistory, Redirect } from 'react-router-dom'
import productContext from "../context/productContext"
import storeDataContext from "../context/storeData"
import storeProductContext from "../context/StoreProduct"

function Bestsellerproducts() {
    let history = useHistory()
    const location = useLocation(); 
    const {products} = useContext(productContext);
    const [cat, setCat] = useContext(storeDataContext)
    let [filteredProducts, setFilteredProducts] = useState([]);
    
    // console.log(products);

    let authorValue;
    let bestSellerValue;
    let [prod, setProd] = useContext(storeProductContext);

    useEffect (()=>{
            console.log(cat)
            const temp = products.filter(product => product.bestSeller === true);
            setFilteredProducts(temp);
      },[]);
      console.log(filteredProducts);

      let author = (product) =>{
          if(product.author){
            // alert(product.author)
            return   <p style={{color: 'black', backgroundColor: 'white', marginTop: '0px', fontFamily: 'sans-serif', fontWeight: 'bolder'}}>By {product.author}</p>
          }
        //   return authorValue;
      }

      let bestseller = (product) =>{
        if(product.bestSeller === true){
          // alert(product.author)
          return  <p style={{color: 'black', backgroundColor: 'white', marginTop: '0px', fontFamily: 'sans-serif', fontWeight: 'bolder'}}>This product is bestseller</p>
        }
    }

    const details = (product) =>{
        setProd(product)
        history.push('/products-details');
    }

    return (
        <div className="productlist">
            {filteredProducts.map(product => {
                return (
                    <div  className="product">
                    <div className="image">
                        {/* <Link to={
                                {
                                    pathname:"/products-details",
                                    aboutProps:{
                                        product:product
                                    }
                                }
                            }> */}
                            <img src={require(`../assets/Products/${product.name}.jpg`).default} 
                            style={{ width:"80%", height: '250px'}} onClick={() => details(product)}></img>
                        {/* </Link> */}
                        </div>
                        {author(product)}
                        {bestseller(product)}
                        <p style={{color: 'black', backgroundColor: 'white', marginTop: '0px', fontFamily: 'sans-serif', fontWeight: 'bolder'}}>In {product.category}</p>
                        <p style={{color: 'black', backgroundColor: 'white', marginTop: '0px', fontFamily: 'sans-serif', fontWeight: 'bolder'}}>${product.price}</p>
                    
                    </div>
                )
            })}
            {/* {props.product.category} */}
        </div>
    )
}

export default Bestsellerproducts
