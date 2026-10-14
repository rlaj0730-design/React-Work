import React from 'react'
import ModeContext from '../context/modeContext'
import { useState } from 'react'
// 문제 true또는 false의 값을 저장할 수 있는
// isDark 변수와 값을 변경할 수 있는 setIsDark를 가지고 있는
// Provider를 만드시오
// isDark의 초기값은 true입니다.

const ModeProvider = ({children}) => {

    const [isDark, setIsDark] = useState("true");

  return (
    <ModeContext.Provider value={{isDark, setIsDark}}>
        {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider