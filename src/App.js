import React, { useState } from "react";
import FuncCompo from "./Component/FuncCompo";
import ClassCompo from "./Component/ClassCompo";
import "./Component/style.css"


function App() {
  const [Show,setFShow]= useState(false)
  const [CShow,setCShow]= useState(false)
  return(
    <div >
    <h1>Styling using Functional Component and Class Components</h1>
    <div className="btnbox">
    <button className="button" onClick={()=>setFShow(!Show)}>To see styling using functional component</button>
    <button className="button" onClick={()=>setCShow(!CShow)}>To see styling using Class component</button>
    </div>
    
    <div className="container">
    {Show? <FuncCompo/>:" "}
    {CShow? <ClassCompo/>: " "}
    </div>
    
    
    </div>
    
  )
}

export default App;
