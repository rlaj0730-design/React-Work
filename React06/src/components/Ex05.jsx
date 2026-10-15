/*
    useEffect 실습 : 참참참 게임!

    1. 왼쪽, 가운데, 오른쪽 버튼을 클릭했을때
        - 나의 선택 : 내가 누른 버튼의 내용
        - 컴퓨터의 고개 : 셋 중에 랜덤으로 선택

    2. 결과를 출력
        - 초기 : 게임 시작 전
        - 나 == 컴 : 승리!
        - 나 != 컴 : 패배
        - 단, 삼항연산자를 사용하지 말고 useEffect를 사용해서 문제를 푸시오
*/


import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Ex05 = () => {

  const [my, setMy] = useState("");
  const [com, setCom] = useState("");
  const [comment, setComment] = useState("");

  const pos = ["왼쪽", "가운데", "오른쪽"];
  
   const handleBtn = (e) => {

    setMy((e.target.innerText));
    
    const ranNum = Math.floor(Math.random() * 3);
    setCom(pos[ranNum]);
    // if(ranNum==0){
    //     setCom("왼쪽")
    // }else if(ranNum==1){
    //     setCom("가운데")
    // }else{
    //     setCom("오른쪽")
    // }

    
 }

 useEffect(() => {
 
     if(my == "" && com == ""){
         setComment("게임시작 전 입니다.");
     }else if(my == com){
       setComment("승리!");
     }else{
       setComment("패배!");
     }
   }, [my, com])
      
  return (
    <div>
        <h1>참참참 게임</h1>
        <p>나의 선택 : {my}</p>
        <p>컴퓨터의 고개 : {com}</p>
        <b>{comment}</b>
        <hr />
        {/* pos가 가진 글자가 들어간 버튼을 만드시오 */}
        { pos.map( (e, index) =>
            <button key={index} onClick={handleBtn}>{e}</button>
        ) }

    </div>
  )
}

export default Ex05