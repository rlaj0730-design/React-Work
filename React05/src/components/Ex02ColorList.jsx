import React from 'react'
import colorContext from '../context/colorContext';
import { useState } from 'react';
import { useContext } from 'react';

const Ex02ColorList = () => {

    // context 안에 있는 useState(color과 setColor 사용하기)
  const {color, setColor} = useContext(colorContext);
  console.log(color);


  const colorList = ["red", "orange", "yellow", "green", "blue"];
  return (
    <div>
        <h1>색상 변경하기</h1>

        <div style={{display : "flex"}}>

            {colorList.map((e, index) => 
                <div onClick={() => setColor(e)} key={index} 
                style={{width :"100px", height : "100px", backgroundColor : e, cursor : "pointer"}}>
                </div>
            )}

        </div>
    </div>
  )
}

export default Ex02ColorList