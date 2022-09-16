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



function App(){
  
    return (
          <Routes>
            <Route path="/" element={<Main/>}></Route>


            /about/shopping
            <Route path="/about" element={<About/>} >
                
                <Route path="shopping" element={<ShoppingCart/>}></Route>
                <Route path="checkout" element={<Checkout/>}></Route>
                <Route path="payment" element={<Payment/>}></Route>
            
            </Route>
          
          
          
          </Routes>
      );
}

export default App