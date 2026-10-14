import React from 'react'
import useValueStore from '../store/useValueStore'

const Ex04 = () => {
    
    let {text, changeText} = useValueStore();

    const handleInput = (e) => {
        changeText(e.target.value);
        console.log(text);
    }

  return (
    <div boarder="1px solid black">
        <h1>메인페이지</h1>
        <input type="text" onChange={handleInput}/>

    </div>
  )
}

export default Ex04