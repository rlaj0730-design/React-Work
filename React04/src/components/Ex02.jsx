import React from 'react'

const Ex02 = () => {

    const names = ["김도영", "박재현", "양현종", "김태균", "하주석"];

    const info = [
        {name : "김도영", position : "3루수"},
        {name : "박재현", position : "좌익수"},
        {name : "양현종", position : "투수"}
    ];

    const teams = [
        {name : "박병관", age : 20, mbti : "ENFP"},
        {name : "장영우", age : 21, mbti : "ISTJ"},
        {name : "양상권", age : 22, mbti : "INFP"},
        {name : "김민수", age : 50, mbti : "ESTJ"}
    ];

    const flowers = [
        { name : "장미", mean : "사랑과 열정" },
        { name : "튤립", mean : "고백과 설렘" },
        { name : "해바라기", mean : "당신만 바라봅니다" }
    ];

    const fruits = [
        "apple", "orange", "banana", "pineapple", "strawberry", "peach"
    ];

  return (
    <div>

        { fruits.filter( e => e.length > 6).map((e,index) => <p key = {index}>{e}</p>)}

        { flowers.map((e, index) =>
            <React.Fragment key={index}>
                <h1>{e.name}</h1>
                <p>{e.mean}</p>
            </React.Fragment>
        )}

        <ul>
        {names.map( (e, index) => <li key={index}>{e}</li> )}
        </ul>

        <ul>
            {info.map( (e, index) => <li key={index}> 이름 : {e.name} 포지션 : {e.position} </li>)}
        </ul>

        <table border="1px solid black">
            <thead>
                <tr>
                    <th>이름</th>
                    <th>나이</th>
                    <th>MBTI</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((e, index) => 
                     <tr key={index}>
                         <td>{e.name}</td> 
                         <td>{e.age}</td> 
                         <td>{e.mbti}</td> 
                    </tr>
                )}
            </tbody>
        </table>


    </div>
  )
}

export default Ex02