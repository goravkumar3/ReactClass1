import React,{useState} from "react";
const Hook1=()=>{
    let [count,setCount]=useState(0)
    let increase=()=>{
        setCount(++count)
    }
    let decrease=()=>{
        setCount(--count)
    }
    return(
        <>
        <button onClick={increase}>+</button>
        <span>{count}</span>
        <button onClick={decrease}>-</button>
        </>
    )
}
export default Hook1;