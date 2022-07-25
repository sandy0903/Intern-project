import React from 'react'
import ReactDOM from 'react-dom'

const Layout=({children})=>{
    return (
        <div className='container'>
            <div className='calculator-app'>
                {children}

            </div>

        </div>
    )

}