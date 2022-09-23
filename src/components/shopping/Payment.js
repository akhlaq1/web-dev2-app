import React, {useEffect, useState} from 'react'

import {
  useNavigate 
} from "react-router-dom";


import ClipLoader from "react-spinners/ClipLoader";
function Payment() {
  let [loading, setLoading] = useState(true);
  let navigate = useNavigate()
  let user = {
    role:"ADMIN"
  };



  useEffect(()=>{
    if(user?.role == "ADMIN"){
      console.log("ADMIN is signed in")
    }else{
      navigate('/about')
    }
  },[studentData])

  setTimeout(()=>{
    setLoading(false)
  },5000)

  user?.role == "ADMIN" ? console.log("Condition true") : console.log("Condition false")

  return (
    <>
    
   {
    loading ? (<ClipLoader loading={loading} size={150} />) : (<h1>Hello World</h1>)
   }
    </>
  )
}

export default Payment