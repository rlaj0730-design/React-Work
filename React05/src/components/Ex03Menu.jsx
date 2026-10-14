import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import modeContext from '../context/modeContext'

const Ex03Menu = () => {

    const {isDark, setIsDark} = useContext(modeContext);

  let menuStyle = {
    width : "100px",
    height : "100px",
    backgroundColor : isDark? "black" : "lightgray",
    marginLeft : "10px",
    color : isDark? "white" : "black",
    lineHeight : "100px",
    textAlign : "center"
  }

  return (
    <div style={{ display : "flex", width : "100%", height : "100px"}}>
        <div style={menuStyle}>메인</div>
        <div style={menuStyle}>소개</div>
        <div style={menuStyle}>상품보기</div>
    </div>
  )
}

export default Ex03Menu