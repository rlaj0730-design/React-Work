import React from 'react'
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

const Ex05 = () => {

  // 이미지의 경로를 저장할 배열
  const imgs = [
    "/dice/d1.png", "/dice/d2.png", "/dice/d3.png",
    "/dice/d4.png", "/dice/d5.png", "/dice/d6.png"
  ];

  // 사용자의 주사위 이미지를 저장할 변수
  const [ userImg, setUserImg ] = useState(imgs[0]);
  const [comImg, setComImg ] = useState(imgs[0]);

  // 승리 횟수를 저장할 변수
  const [ userNum, setUserNum ] = useState(0);
  const [comNum, setComNum ] = useState(0);

  // 버튼을 클릭했을 때 작동하는 함수
  const handleBtn = () => {
    // 랜덤 숫자 뽑기
    const userRan = Math.floor(Math.random() * imgs.length);
    const comRan = Math.floor(Math.random() * imgs.length);
    console.log(userRan);
    console.log(comRan);

    setUserImg(imgs[userRan]);
    setComImg(imgs[comRan]);

    if(userRan > comRan){
        setUserNum(userNum + 1);
    }else if(userRan < comRan){
        setComNum(comNum + 1);
    }

  }

  const divStyle = {
    border : "1px solid #eee",
    textAlign : "center",
    display : "inline-block",
    margin : "50px",
    width : "300px",
    padding : "20px"
  }


  return (
    <div style={{textAlign : "center", marginTop : "10px"}}>
      <h1>주사위 게임!</h1>
      <div style={divStyle}>
        <img src={userImg} style={{width : "100px"}} />  
        <h3>user</h3>
        <h1>{userNum}</h1>
      </div>

      <div style={divStyle}>
        <img src={comImg} style={{width : "100px"}} />  
        <h3>computer</h3>
        <h1>{comNum}</h1>
      </div>
      
      <br />
      <Button onClick={handleBtn}><h2>굴리기!</h2></Button>

    </div>
  )
}

export default Ex05