import React, { useState } from 'react'

function calculator() {
  const[num1,setNum1]=useState("")
  const[num2,setNum2]=useState("")
  const a=Number(num1);
  const b=Number(num2);
  return (
    <div>
      <h1 style={{textDecoration:"underline"}}>calculator</h1>
      <input type="Number" placeholder='Enter the frist  vlaue'
      onChange={(e)=>setNum1(e.target.value)} />
      <input type="Number" placeholder='Enter the second value' 
      onChange={(e)=>setNum2(e.target.value)}/>
      <div style={{height:"200px",
      width:"300px",
      border:"3px inset black",
      marginLeft:"550px",
      marginTop:"20px",
      backgroundColor:"lightblue"}}>
        <h4>Result</h4>
        <p><strong>Addtion:</strong>{a+b}</p>
        <p><strong>Subtraction:</strong>{a-b}</p>
        <p><strong>Multiplication:</strong>{a*b}</p>
        <p><strong>Divison:</strong>{b==0 ?"can't divided by zero":a/b}</p>
        




      </div>
    </div>
  )
}

export default calculator
