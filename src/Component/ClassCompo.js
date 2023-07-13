import React, { Component } from "react";

class ClassCompo extends Component{
    render(){
        return(
            <div className="box box2">
         <h2>This is created using Class component</h2>
        <p>This is done using external CSS</p>
        <p style={{color: "blue"}}>This is done using inline CSS</p>
        </div>
        )
    }

}

export default ClassCompo;
