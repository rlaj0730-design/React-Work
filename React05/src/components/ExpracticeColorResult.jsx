import React from 'react'
import useColorStore from '../store/useColorStore';

const ExpracticeColorResult = () => {

    let {color} = useColorStore();

    return (
        <div>
            <h1>선택한 색상</h1>
            <div style={{
                width: "100px",
                height: "100px",
                backgroundColor: color
            }}></div>
        </div>
    )
}

export default ExpracticeColorResult