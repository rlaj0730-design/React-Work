import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import modeContext from '../context/modeContext'


const Ex03Footer = () => {

    const {isDark, setIsDark} = useContext(modeContext);

    console.log(isDark);

  return (
    <div style={{width : "100%", height : "200px", 
    backgroundColor : isDark? "black" : "lightgray" , margin : "10px"}}>
        <button onClick={()=> {setIsDark(!isDark)}}>다크모드</button>
    </div>
  )
}

export default Ex03Footer