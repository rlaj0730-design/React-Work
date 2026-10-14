import React from 'react'
import Ex02ClassComponent from './Ex02ClassComponent';
import { useState } from 'react';

const Ex02 = () => {

    const [isShow, setIsShow] = useState(true);

  return (
    <div>
        <h1>React 생명주기 (함수형 컴포넌트)</h1>
        <button onClick={() => setIsShow(!isShow)}>보여주세요</button>
        { isShow && <Ex02ClassComponent />}
    </div>
  )
}

export default Ex02