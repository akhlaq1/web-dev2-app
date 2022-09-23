import React, {useEffect} from 'react'
import {
    useParams,
    useNavigate 
  } from "react-router-dom";

function URLparams() {

let params = useParams();



  let btnClick = ()=>{
    
  }
  return (
    <>
    <div>Welcome {params.welcome}!</div>
    <button onClick={btnClick}>Go to About</button>
    </>
    
  )
}

export default URLparams