import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Ex03FunctionComponent = () => {

  const [num, setNum] = useState(0);   

  // 1번 생성자 대체 부분
  console.log("1번 : 생성자 호출")

  // 3번 DidMount 대체 부분
  useEffect( () => {
    console.log("3번 : DidMount 호출")
  } , []);

  // 4번 DidUpdate 대체 부분
  useEffect( () => {
    console.log("4번 : DidUpdate 호출")
  }, [num]);

  // 5번 UnMount 대체 부분
  useEffect( () => {
    return () => {
        console.log("5번 : UnMount 호출")
    }
  } , []);

  const handleIncrement = () => {
    setNum(num + 1);
  }

  return (
    <div>
        { /* 2번 랜더 대체 부분 */}
        { console.log("2번 : 랜더 호출") }
        Ex03FunctionComponent : {num} 
        <button onClick={handleIncrement}>올리기!</button>
    </div>
  )


}

export default Ex03FunctionComponent