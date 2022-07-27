import React from 'react'
import ReactDOM from 'react-dom'
import Box from "./Box"
import { useGlobalContext, ContextProp } from '../context'

const Borad=()=>{
    const {clearValue}=useGlobalContext() as ContextProp
    return (
        <div className='flex flex-wrap flex-end board'>
            <Box bgColor="#6A6363" text={clearValue ? "AC" : "C"} value={clearValue ? "AC" : "C"}/>
            <Box bgColor="#6A6363" text="+/-" value="+/-"/>
            <Box bgColor="#6A6363" text="%" value="%"/>
            <Box bgColor="#FD9E29" text="&divide;" value="/"/>
            <Box bgColor="#847D7D" text={7} value={7}/>
            <Box bgColor="#847D7D" text={8} value={8}/>
            <Box bgColor="#847D7D" text={9} value={9}/>
            <Box bgColor="#FD9E29" text="&times;"  value="*"/>
            <Box bgColor="#847D7D" text={4} value={4}/>
            <Box bgColor="#847D7D" text={5} value={5}/>
            <Box bgColor="#847D7D" text={6} value={6}/>
            <Box bgColor="#FD9E29" text="&minus;" value="-"/>
            <Box bgColor="#847D7D" text={1} value={1}/>
            <Box bgColor="#847D7D" text={2} value={2}/>
            <Box bgColor="#847D7D" text={3} value={3}/>
            <Box bgColor="#FD9E29" text="+" value="+"/>
            <Box bgColor="#847D7D" text={0} col={2} value={0}/>
            <Box bgColor="#847D7D" text="," value=","/>
            <Box bgColor="#FD9E29" text="="  value="="/>
        </div>
    )

}
export default Borad