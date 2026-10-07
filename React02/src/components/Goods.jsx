import React from 'react'

const Goods = (props) => {
    let col = ""
    let exp = ""
    if (props.money >= 10000){
        col += "red";
        exp += "사려는 물품의 금액이 너무 비쌉니다.."
    }
  return (
    
    <div style = {{border : "1px solid black", padding : "2%", backgroundColor : col}}>
        <h1> 사려는 물품 :{props.goods} </h1>
        <p> 금액 :{props.money} </p>
        {exp}
    </div>
  )
}
// 선생님 풀이
// import React from 'react'

// const Goods = (props) => {

//     // 배경색 여부
//     let color = props.money >= 10000 ? "red" : "white";

//     let myStyle = {
//         border : "1px solid black",
//         backgroundColor : color
//     }

//     // 비싼금액인지 체크
//     let result = color == "red" && "사려는 물품의 금액이 너무 비쌉니다..";

//   return (
//     <div style={myStyle}>
//         <h1>사려는 물품 : {props.goods} </h1>
//         <h2>금액 : {props.money} </h2>
//         <span>{result}</span>
//     </div>
//   )
// }

// export default Goods

export default Goods