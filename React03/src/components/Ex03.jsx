import React from 'react'
import { useState } from 'react';
// React에서 이미지를 가져오는 방식
// 1. import해서 가져오기
// import img from "../assets/imgs/img1.png" --> 처음에 이미지 파일이 assets폴더 안에 있을땐 임포트 해야했음

// (props) 대신 ({src, name, money}) 로 해서 밑에 props. 안써도 됨
const Ex03 = (props) => {
    const [ num, setNum ] = useState(0);
    const [imo, setImo] = useState("🤍");

    const heart = () => {
        
        num==0? setNum(num + 1):setNum(0)
        num==0? setImo("❤️"):setImo("🤍")
    }



  return (
    // 안쪽 중괄호는 객체, 바깥 중괄호는 표현식
    // <div style={{ textAlign : "center"}}>
    //     {/* 2. public안에 있는 파일을 상대경로로 입력 */}
    //     <img width="300px" src="/imgs/img1.png"/>
    //     <p>
    //         <span style={{cursor : "pointer"}} onClick={heart}>❤️</span>
    //         <span>좋아요 {num}개</span>
    //     </p>

    // </div>

     <div style={{ textAlign : "center", float : "left", margin : "2%" }}>
        {/* 2. public안에 있는 파일을 상대경로로 입력 */}
        <img width="300px" src={props.src}/>
        <p>
            <span>{props.name}</span>
            <br />
            <span>{props.money}</span>
        </p>
        <p>
            <span style={{cursor : "pointer"}} onClick={heart}>{imo}</span>
            <span>찜하기 {num}개</span>
        </p>

    </div>
  )
}

export default Ex03