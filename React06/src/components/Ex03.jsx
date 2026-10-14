import React from 'react'
import Ex03FunctionComponent from './Ex03FunctionComponent';
import { useState } from 'react';

const Ex03 = () => {
  
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
        <h1>React 생명주기 (함수형 컴포넌트)</h1>
        <button onClick={() => setIsShow(!isShow)}>보여주세요</button>
        { isShow && <Ex03FunctionComponent />}
    </div>
  )
}

export default Ex03