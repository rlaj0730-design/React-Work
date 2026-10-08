/*
    React Event : react에서 이벤트를 등록할 때는 'on이벤트'를 사용
    1. onClick : camelCase방식(onclick으로 사용하지 않는다) (여담으로 헝가리안표기방식? 도있음)
    2. {}를 사용(""를 사용하지 않는다)
    3. {}안에는 함수의 이름만 작성 (함수 실행을 위한 소괄호를 사용하지 않는다)
    4. { () => {}} 익명함수 형태로도 사용가능하다
    5. 이벤트는 HTML요소에만 이벤트 설정이 가능하다
        --> 컴포넌트에는 이벤트를 줄 수 없다

    변수를 통한 화면의 값 증가
    기존 JavaScript에서는 p요소.innerText에 새롭게 변수 넣어주는 것으로 변경가능
    React에서는 document를 통한 요소 가져오기가 불가능하다
    변수를 통한 화면의 값 증가나 변화 사용이 불가능하다
    React에서는 state를 사용한다

    state : component 내부에서 변경 가능한 데이터
    -> 데이터 변경되면 UI(화면)이 같이 변경됨(다시 렌더링 됨)

    useState사용방법
    1. useState import하기
     - import {useState} from 'react'
    2. state변수 선언하기
     - const [state명, setState명] = useState(초기값);
     - ex) const [text, setText] = useState("Hello");
    3. state변수 값 변경
     - setState명 함수를 사용
     - ex) setText("Hello React!");

*/
import React from 'react'
import {useState} from 'react'; // state를 사용하기위해서는 useState를 임포트 해야한다

const Ex01 = () => {

    // state 사용하기
    let [ num, setNum ] = useState(0);

    const increase = () => {
        setNum(num + 1); // state의 num값을 변경하기 위해서는 반드시 set함수를 사용해서 변경한다
        console.log('+1 증가');
    }

    const decrease = () => {
        setNum(num - 1);
        console.log('-1 감소')
    }

  return (
    <div>
        <p>{num}</p>
        <button onClick={decrease}>-1</button>
        {/* 카멜케이스로 온클릭 작동함수를 걸어준다 */}
        <button onClick={increase}>+1</button> 
    </div>
  )
}

export default Ex01