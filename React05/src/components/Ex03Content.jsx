import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import modeContext from '../context/modeContext'

const Ex03Content = () => {

    const {isDark, setIsDark} = useContext(modeContext);

  return (
    <div style={{width : "100%", height : "300px", 
    backgroundColor : isDark? "black" : "lightgray", margin : "10px"}}>
        
        <h1 style={{ color : isDark? "white" : "black"}}>메인 공간 입니다.</h1>
    </div>
  )
}

export default Ex03Content