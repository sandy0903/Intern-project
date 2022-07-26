import React from 'react'
import ReactDOM from 'react-dom'

type BoxProp= {
    bgColor:string,
    text:string,
}


const Box=({bgColor, text}:BoxProp)=>{
    return <div className=' box' style={{backgroundColor:bgColor}}>
        {text}

    </div>
}
export default Box