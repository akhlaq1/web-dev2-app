import React, {useState, useEffect} from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import ShoppingCart from './components/shopping/ShoppingCart'
import Payment from './components/shopping/Payment'
import Checkout from './components/shopping/Checkout'
<<<<<<< HEAD
import URLparams from "./components/shopping/URLparams";
=======
>>>>>>> c191cf8b7c8c27d75ccd11793d877989a0207006



function App(){
  
    return (
          <Routes>
            <Route path="/" element={<Main/>}></Route>
<<<<<<< HEAD
            
            
            
            <Route path="/about" element={<About/>} >
                
                <Route index element={<ShoppingCart/>}></Route>
                
                
                <Route path="shopping" element={<ShoppingCart/>}></Route>
                <Route path="checkout" element={<Checkout/>}></Route>
                <Route path="payment" element={<Payment/>}></Route>
                <Route path="student/:welcome" element={<URLparams/>}></Route>
=======


            /about/shopping
            <Route path="/about" element={<About/>} >
                
                <Route path="shopping" element={<ShoppingCart/>}></Route>
                <Route path="checkout" element={<Checkout/>}></Route>
                <Route path="payment" element={<Payment/>}></Route>
>>>>>>> c191cf8b7c8c27d75ccd11793d877989a0207006
            
            </Route>
          
          
          
          </Routes>
      );
}

export default App