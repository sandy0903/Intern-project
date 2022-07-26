import React from 'react'
import ReactDOM from 'react-dom'

const Layout=({children}:any)=>{
    return (
        <div className='container'>
            <div className='calculator-app'>
                {children}
            </div>

        </div>
    )

}
export default Layout