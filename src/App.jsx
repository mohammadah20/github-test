import React from "react";


export default MyBotton = ()=>{
  handleClick=()=>{
    alert('You Clicked Me!') 
  }

  return(
    <button onClick={handleClick}>Click here</button>
  )
};
