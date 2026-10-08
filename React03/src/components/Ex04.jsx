import React from 'react'
import { useState } from 'react';
/*
    내가 누른 버튼의 값과 랜덤으로 뽑은 값이 일치하면
    '게임 시작전 입니다' 위치에 '정답입니다!'를 출력
    일치하지 않으면 '틀렸습니다!'를 출력

    내가 선택한 숫자의 값과
    컴퓨터가 뽑은 랜덤 숫자를 각 해당 p태그 위치에 나오게 하시오
*/

const Ex04 = () => {

    const [ num, setNum ] = useState(0);
    const [com, setCom] = useState(0);
    const [ment, setMent] = useState("게임 시작 전 입니다.");

    const handleBtn = (e) => {
        // 난수 생성하기
        const ranNum = Math.floor(Math.random() * 3) + 1;
        // 생성된 난수확인
        console.log(ranNum);
        // 누른 버튼의 값 가져오기
        console.log(e.target.innerText);

        setNum(parseInt(e.target.innerText));
        setCom(ranNum)
        ranNum == e.target.innerText? setMent("정답입니다!"):setMent("틀렸습니다!")

    }



  return (
    <div>
        <button onClick={handleBtn}>1</button>
        <button onClick={handleBtn}>2</button>
        <button onClick={handleBtn}>3</button>

        <div>
            <p>내가 선택한 숫자 : {num}</p>
            <p>컴퓨터가 뽑은 랜덤 숫자 : {com}</p>

            <hr />
            <p>{ment}</p>
        </div>

    </div>
  )

}
export default Ex04
 