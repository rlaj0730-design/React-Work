import React from 'react'

const Ex01Sub = ({inputData, changeDataSub}) => {
  return (
    <div>
        <p>
            1-2.상위(Ex01Main)에서 입력한 정보를 하위 (Ex01Sub)에서 출력하기
            <br />
            {inputData}
        </p>

        <hr />
        <p>
            2-1. 하위(Ex01Sub)에서 입력한 정보 :
            <input type="text" onChange={changeDataSub}/>
        </p>


    </div>
  )
}

export default Ex01Sub