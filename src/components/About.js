import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function About() {
  return (
    <>

    <Link className='nav-item' to={"/"}>Home</Link> <br></br>
    <Link to={"/about/shopping"}>Shopping</Link> <br></br>
    <Link to={"/about/payment"}>payment</Link> <br></br>
    <Link to={"/about/checkout"}>checkout</Link> <br></br>


    {/* <a href='/'>HOME</a> <br></br>
    <a href='/about/shopping'>Shopping</a> <br></br>
    <a href='/about/payment'>Payment</a> <br></br>
    <a href='/about/checkout'>Checkout</a> <br></br> */}
    <div>This is about component that you are viewing</div>
    <hr></hr>
    <Outlet></Outlet>

    </>
    
  )
}

export default About