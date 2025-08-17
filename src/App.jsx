import React from "react";


const MyBotton = ()=>{
  handleClick=()=>{
    alert('You Clicked Me!') 
  }

  return(
    <button onClick={handleClick}>Click here</button>
  )
};

export default  MyBotton