import React from 'react'
import Ex01Sub from './Ex01Sub'
import { useState } from 'react'

const Ex01Main = () => {

    // 1-1 입력한 데이터를 저장할 state
    const [inputData, setInputData] = useState("");

    // 2-1하위에서 입력한 데이터를 저장할 state
    const [inputSubData, setInputSubData] = useState("");

    // 1-1 상위에서 데이터를 입력하면 변화를 감지하는 함수
    const changeData = (e) => {
        setInputData(e.target.value);
    }

    // 2-1 상위에서 하위의 변화를 감지하는 함수(인풋태그 입력내용)
    const changeDataSub = (e) => {
        console.log(e.target.value);
        setInputSubData(e.target.value);
    }

  return (
    <div>
        <h2>컴포넌트 간 양방향으로 데이터를 전달해보자!</h2>
        <p>
            1-1.상위(Ex01Main)에서 입력한 정보:
            <input type="text" onChange={changeData}/>
        </p>


        <Ex01Sub inputData={inputData} changeDataSub = {changeDataSub}/>

        <p>
            2-1. 하위(Ex01Sub)에서 입력한 정보를 상위(Ex01Main)에서 출력하기.(자식에서 부모로)
            <br/>
            {inputSubData}
        </p>

    </div>
  )
}

export default Ex01Main