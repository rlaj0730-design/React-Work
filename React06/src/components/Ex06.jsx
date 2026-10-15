import React, { useEffect, useState } from 'react'

const Ex06 = () => {

    const [movieList, setMovieList] = useState([]);

  // key : 000000000000000000

  // 많은 양의 데이터를 가져오거나 무거운 작업을 수행할때 DidMount안에 실행해준다
  useEffect( () => {

    // 비동기 통신
    const fetchData = async () => {
        const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
        const key = "000000000000000000"
        const targetDt = "20261014";

        // 해당 url로 비동기 요청해서 데이터 받아오기
        const res = await fetch(`${url}?key=${key}&targetDt=${targetDt}`);

        // 받아온 데이터를 json형태로 변환
        const data = await res.json();

        console.log(data);

        setMovieList(data.boxOfficeResult.dailyBoxOfficeList);

        console.log(movieList);
    }

    fetchData();

  }, []);



  return (
    <div>
        <h1>데일리 영화 순위</h1>

        <table border = "1px solid black">
            <thead>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                </tr>
            </thead>
            <tbody>
                {movieList.map((e, index) =>
                    <tr key={index}>
                        <td>{e.rank}</td>
                        <td>{e.movieNm}</td>
                        <td>{e.openDt}</td>
                    </tr>
                )}
            </tbody>

        </table>


    </div>
  )
}

export default Ex06