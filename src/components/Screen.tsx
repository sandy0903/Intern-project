import React from 'react'
import ReactDOM from 'react-dom'
import "../styles/button.css"
const Screen=()=>{
    return (
        <div className='screen'>
            <div className='flex '>
                <div className='btn delete'>x</div>
                <div className='btn zoom'>-</div>
                <div className='btn expand'>+</div>
            </div>
            <p className='result'>22222</p>

        </div>
    )
}
export default Screen