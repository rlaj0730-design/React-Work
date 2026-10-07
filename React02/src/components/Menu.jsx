import React from "react" //컴포넌트로 사용하기위한 import

/*
    컴포넌트 (Component)
    - React로 만들어진 앱을 이루는 최소단위
    - 반복되는 화면을 하나로 묶어서 컴포넌트로 만든다
    - 내가 원하는 화면을 태그화 시키는 것
    - 중요. 반드시 대문자 시작해야 한다
    - html요소는 소문자로 시작하고 component는 대문자로 시작한다

    기본적으로 컴포넌트도 JS모듈
    JS모듈을 사용하기 위해서는 export / import가 필수다
    
    1. CommonJS 방식 (CJS)
    - 고전적인 방식 node.js 공식 방식
    - node.js 또는 express에서 사용하는 방식
    - 수출 : module.exports = 모듈명
    - 수입 : require("모듈명")
    
    2. ES MOdele방식 (ESM)
    - JS 표준 방식
    - React, 브라우저 등에서 사용하는 방식
    - 수출 : export default 모듈명
    - 수입 : import 모듈명 from "경로"

    프로퍼티 (줄여서props, property)
    - 상위 컴포넌트에서 하위 컴포넌트에 값을 전달할 때 사용
    - 상위컴포넌트
     <하위 컴포넌트 이름 (Menu) 속성 = "값" 속성 = "값" />
     - 값이 단순 문자열인 경우 속성 ="값"
     - 값이 다른 자료형인 경우 속성 = {값}

     - 하위컴포넌트
     - 함수의 매개변수로 Object(객체) 형태로 값을 전달 받는다
     - let 컴포넌트 이름 = (props) => {
        props.속성 <- 여기에 값이 있음
        }
*/

// 컴포넌트는 화살표 함수 사용
let Menu = (props) => {

    // props로 받은 데이터는 객체형태로 전달이 된다.
    console.log(props);
    return(
        <>
            <div style = {{border : "1px solid black", padding : "2%", margin : "2%"}}>
                <h1>{props.drink}</h1>    {/*props가 객체 형태라 키값으로 꺼내옴*/}
                <p>{props.money}원</p>
            </div>
        </>
    )
}

export default Menu