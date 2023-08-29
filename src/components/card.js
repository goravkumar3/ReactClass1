import React from "react";

function Card(props){
    return(<div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
         <img src={props.source} alt=""/>
    </div>)
}
export default Card;