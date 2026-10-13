import React from 'react'
// 내가 만든 Context.js 연결하기
import ColorContext from '../context/colorContext'

// 변하는 색상을 저장할 state 만들기
import { useState } from 'react'

// children은 오타가 있어서는 안된다 --> 고정된 문법
// children -> 하위 컴포넌트들이 자동으로 들어오게 된다 ( 따로 값을 안넣어줘도 )
// 컴포넌트들이 췰드런에 잠깐 들어갔다 나가게 되는것
const ColorProvider = ({children}) => {

    // 변화하는 색상의 값을 저장할 state 만들기
    const [color, setColor] = useState("red");

    // ColorContext.Provider을 통해서 사용한다
    // value props를 통해 color변수와 setColor함수를 전달
    // children 하위 모든 요소에서 적용하겠다

  return (
    <ColorContext.Provider value={{color, setColor}}>
        {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider