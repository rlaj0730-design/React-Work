import React from 'react'

const Team = (props) => {
   
  return (
    <div>
        <ul>
            <li>이름 : {props.name}</li>
            {/* 나이가 40세 미만이라면 영크크를 출력. 40세 이상이라면 늙크크를 출력해주세요 */}
            <li>나이 : {props.age >= 40? "늙크크" : "영크크"}</li>
            <li>성별 : {props.gender}</li>
            <li>전화번호 : {props.phone}</li>
        </ul>
    </div>
  )
}

export default Team