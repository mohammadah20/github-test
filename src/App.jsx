import React from 'react';
import { useState } from 'react';

Square = ({value,onSquareClick}) =>{

  return <button className='square' onClick={onSquareClick}>{value}</button>;

}
const Board = ()=>{
  
  const  [xIsNext,setXIsNext] = useState(true);
  const [square,setSquare]=useState(Array(9).fill(null));
handleClick=(i)=>{
  
  if(square[i]|| calculateWinner(squares)){
    return;
  }

   const nextSquares=squares.slice();
  
  {xIsNext ?( nextSquares[i]="X")
    :(nextSquares[i]="O")
  }
  setSquare(nextSquares);
  setXIsNext(!xIsNext);
}

 const winner = calculateWinner(squares);
 let status;
 {winner ?(
  status = "Winner: " + winner
)  : (
  status = "Next player: " + (xIsNext ? "X" : "O")
)
}  

  return(
    <div>
   <div className="board-row">
    <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
    <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
    <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
   </div>
   <div className="board-row">
    <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
    <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
    <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
   </div>
   <div className="board-row">
    <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
    <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
    <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
   </div>
   
  </div>
  )
  
}

calculateWinner=()=>{
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<lines.length;i++){
    const[a,b,c]=lines[i];
    
   if(squares[a]&&squares[a] === squares[b]&&squares[a] === squares[c]){
    return square[a];
    }
  }
    
  return null;

}
  
export default  Board