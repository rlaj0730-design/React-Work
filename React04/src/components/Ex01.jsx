import React from 'react'
// map 함수 사용하기
/*
    map함수 : 기존 배열을 이용해서 새로운 배열을 만드는 배열 함수
     - 구조 : 기존배열.map(콜백함수)

     ※ 콜백함수 형태 (index, array는 생략이 가능하다)
      (element, index, array) => {
            return 새로운 배열 규칙
      }

      1. 가장 축약된 형태의 콜백 함수
      const callBackFunc = num => num * 2;

      2. 콜백함수의 원형
      const callBackFunc = (num, index, array) => {
        return 돌려줄 값;
      }
*/

const Ex01 = () => {

    const callBackFunc = num => num *2;  // 매개변수가 하나라면 소괄호 생략가능. 바로 생략될거다. 하면 리턴 생략가능
    //  const callBackFunc = (num, index, array) => {return num*2} -- 이게 원래 방법인데 화살표 함수는 생략가능
    const list = [1, 2, 3, 4, 5];
    const resList = list.map(callBackFunc);
    console.log(resList);

    const foods = [
        <li>짜장면</li>,
        <li>짬뽕</li>,
        <li>탕수육</li>
    ];

    const names =["손흥민", "아이유", "BTS", "최강록", "싸이"];
    // h1태그에 위 네임 리스트를 넣으려면 원래는 for문을 돌렸어야 한다. 하지만 밑에처럼 map함수를 사용하면 편하다.
    // 매개 변수는 뭘 써도 상관없지만 elements 앞글자를 딴 e를 제일 많이 사용한다.
    // const tagNames = names.map( e => <h1>{e}</h1>);
    const tagNames = names.map( (e, index) => {
        return <h1 key={index}>{e}</h1>
    });

    const peoples = [
        {name : "아이유", age : 30, bloodType : "A"},
        {name : "손흥민", age : 32, bloodType : "B"},
        {name : "최강록", age : 34, bloodType : "O"},
    ];

    const resPeoples = peoples.map( (e, index) => 
    <h1 key={index}>{e.name} {e.age} {e.bloodType}</h1>
    );

    // li태그는 반드시 부모태그로 ul,ol태그를 사용해야한다
  return (
    <div>
        {/* html 구역에서 map쓰는 방법 */}
        {peoples.map( e => e.name + e.age + e.bloodType)}

        {resPeoples}

        {tagNames}
        <ul>
            {foods}   
        </ul>
    </div>
  )
}

export default Ex01