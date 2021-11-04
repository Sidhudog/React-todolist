import React from "react";


    const style = {
      backgroundColor: "red",
      color: "black",
      border: "10px solid #c1185b",
      borderRadius: "30px",
      margin: "10px auto",
      width: "60%",
      padding: "5px",
    };

const person = (props) => {

    
    return (
        <div style={style} className="Person">
            <h1>I am {props.name} and i am {props.age}</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
            <div><button onClick={props.click}>Delete</button></div> 
        </div>
        )
};

export default person;