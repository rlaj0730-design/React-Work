import React from 'react'
import useColorStore from '../store/useColorStore'

const ExpracticeColorList = () => {

    let {changeColor} = useColorStore();

   const colorList = ["red", "orange", "yellow", "green", "blue"];

  return (
    <div>
        <h1>색상 변경하기</h1>

        <div style={{display : "flex"}}>

            {colorList.map((e, index) => 
                <div onClick={() => changeColor(e)} key={index} 
                style={{width :"100px", height : "100px", backgroundColor : e, cursor : "pointer"}}>
                </div>
            )}

        </div>
    </div>
  )
}

export default ExpracticeColorList