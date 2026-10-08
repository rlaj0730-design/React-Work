import React from 'react'

const Member = ({team, name}) => {

    // 구조분해할당 - 객체형태로 데이터를 받는게 아닌 변수 형태로 여러개의 값을 받는 형태
    // 상황에 따라서 props로 받거나 구조분해할당으로 데이터를 받으면 된다
    // 단.속성명과 매개변수의 변수명이 일치해야한다!

    let myStyle = {
        border : "1px solid lightblue",
        padding : "10px",
        textAlign : "center",
        width : "500px",
        margin : "10px auto"
    }
  return (
    <div style={myStyle}>
        <p>{team}</p>
        <p>{name}</p>
    </div>
  )
}

export default Member