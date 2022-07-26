import React from 'react'
import ReactDOM from 'react-dom'
import Box from "./Box"
const Borad=()=>{
    return (
        <div className='flex flex-wrap flex-end board'>
            <Box bgColor="#6A6363" text="AC"/>
            <Box bgColor="#6A6363" text="+/-"/>
            <Box bgColor="#6A6363" text="%"/>
            <Box bgColor="#FD9E29" text=""/>
            <Box bgColor="#847D7D" text="7"/>
            <Box bgColor="#847D7D" text="8"/>
            <Box bgColor="#847D7D" text="9"/>
            <Box bgColor="#FD9E29" text=""/>
            <Box bgColor="#847D7D" text="4"/>
            <Box bgColor="#847D7D" text="5"/>
            <Box bgColor="#847D7D" text="6"/>
            <Box bgColor="#FD9E29" text="-"/>
            <Box bgColor="#847D7D" text="1"/>
            <Box bgColor="#847D7D" text="2"/>
            <Box bgColor="#847D7D" text="3"/>
            <Box bgColor="#FD9E29" text="+"/>
            <Box bgColor="#847D7D" text="0"/>
            <Box bgColor="#847D7D" text=","/>
            <Box bgColor="#FD9E29" text="="/>
        </div>
    )

}
export default Borad