import React from "react";
import { useState } from "react";

Square = ({value}) =>{

  const [value,setValue]=useState(null);
  
  handleClick=()=>{
    setValue('X');
  }
  return (<button className="square" onClick={handleClick}>{value}</button>

)}
const Board = ()=>{

  <div>
   <div className="board-row">
    <Square/>
    <Square/>
    <Square/>

   </div>
   <div className="board-row">
   <Square/>
   <Square/>
   <Square/>
   </div>
   <div className="board-row">
    <Square/>
    <Square/>
    <Square/>
   </div>
   
    
  </div>
}
  
export default  Board