import React from 'react'
import {useState} from 'react';

const Ex02 = () => {
    // 입력한 input태그의 값을 저장하는 state
    const [text, setText] = useState("");
    // 화면에 나오게할 값을 저장하는 state
    const [result, setResult] = useState("");

    const handleInput = (e) => {
        // input태그에 입력을 할때 작동되는 함수
        // handleInput함수가 작동된 해당 input의 값을 가져올때
        console.log(e.target.value);
        setText(e.target.value);
    }


    const handleBtn = () => {
        // 버튼을 클릭했을때 작동하는 함수
        setResult(text);
    }



  return (
    <div>
        <input onChange={handleInput} type='text'/>
        <button onClick={handleBtn}>입력</button>
        <p>{result}</p>

    </div>
  )
}

export default Ex02