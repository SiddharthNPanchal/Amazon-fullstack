import './App.css';
import Header from './components/Header'
import Signup from './components/Signup'
import Nav from './components/Nav'
import Promo from "./components/Promo"
import Bestseller from "./components/Bestseller"
import Products from "./components/DisplayProducts"
import ProductDetails from "./components/productdetails"
import Bestsellerproducts from "./components/Bestsellerproducts"
import {useEffect, useState} from "react"
import productContext from "./context/productContext"
import categoryContext from "./context/categoryContext"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import storeDataContext from "./context/storeData"
import storeProductContext from "./context/StoreProduct"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer"
function App() {

  let [isLoading, setIsLoading] = useState(true)
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  let [cat, setCat] = useState("")
  let [prod, setProd] = useState("")

  function signup(){
    if(sessionStorage.getItem("name")==""){
      return <Signup/>
    }
    else{
      return <Dashboard/>
    }
  }

useEffect (()=>{
  fetch("http://localhost:8080/products",{
  }).then(res=>{
    return res.json();
  }).then(data=>{
    console.log(data.body);
    setProducts(data.body);
    // console.log("Products: "+ products);
  })

  fetch("http://localhost:8080/categories").then(res=>{
    return res.json();
  }).then(data=>{
    console.log(data.body);
    setCategories(data.body);
    // console.log("Categories: "+ categories);
  })

},[])

  useEffect(()=>{
    if(products){
      console.log(products)
      setIsLoading(false)
    }
  },[products])

  return (
    
    <div className="App">
      {isLoading ? null :  products ? <productContext.Provider value={{products}}>
        <categoryContext.Provider value={{categories}}>
        <storeDataContext.Provider value={[cat, setCat]}>
          <storeProductContext.Provider value={[prod, setProd]}>

        <Router>
        <Switch>
        <Route path="/products">
            <Products/>
        </Route>
        <Route path="/products-details">
            <ProductDetails/>
        </Route>

        <Route path="/bestsellers">
            <Bestsellerproducts/>
        </Route>

        <Route path="/signup">
            <Signup/>
        </Route>

        <Route path="/dashboard">
            <Dashboard/>
        </Route>

        <Route path="/login"> 
        <Login/>
          </Route>
          <Route path="/">
            <Header/>
            
            <Nav/>
            <Promo/>
            <Bestseller/> 
            <Footer/>
        </Route>
        
        <Route path="/return-orders">Orders</Route>
        </Switch>
        </Router>
        </storeProductContext.Provider>
        </storeDataContext.Provider>
      </categoryContext.Provider>
      </productContext.Provider>
      :null} 
      
    </div>
    
  );
}

export default App;
