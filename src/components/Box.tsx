import React from 'react'
import ReactDOM from 'react-dom'
import { useGlobalContext, ContextProp } from '../context'

type BoxProp= {
    bgColor:string,
    text:string | number,
    value:string | number,
    col?:number
}


const Box=({bgColor, value,text,col}:BoxProp)=>{
    const {handleKeyBoard}=useGlobalContext() as ContextProp
    return <div className={col ? "col box" : "box"} style={{backgroundColor:bgColor}} onClick={()=>handleKeyBoard(value)}>
        {text}

    </div>
}
export default Box