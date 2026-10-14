import React from 'react'
import useValueStore from '../store/useValueStore'

const Ex04Sub = () => {

    let {text} = useValueStore();

  return (
    <div style={{width : "100%", height : "100px",
        border : "1px solid black"
    }}>
        {text}
    </div>
  )
}

export default Ex04Sub