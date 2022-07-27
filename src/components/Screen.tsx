import React from 'react'
import ReactDOM from 'react-dom'
import "../styles/board.css"
import { useGlobalContext, ContextProp } from '../context'

const Screen=()=>{
    const {display,number}=useGlobalContext() as ContextProp

    return (
        <div className='screen'>
            <div className='flex '>
                <div className='btn delete'></div>
                <div className='btn zoom'></div>
                <div className='btn expand'></div>
            </div>
            <p className='result'>{display?display:0}</p>

        </div>
    )
}
export default Screen