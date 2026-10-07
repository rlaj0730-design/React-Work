// css를 import로 가져오기
import './Mycss.css'


function App5(){
    // 인라인 스타일 CSS 적용하기
    // 1. 적용할 CSS를 객체형태로 정의하기(객체 = Jason)
    const myStyle = {
        backgroundColor : "black",
        color : "white",
        fontSize : "30px"
    };

    return(
        <>
            {/* class만 적어도 변환해주지만 fm은 className으로 써야함 */}
            <div className="container">
                <h1 style={myStyle}>오늘은 수요일 입니다.</h1>
                {/* 2.요소에 바로 적용시키는 방법 */}
                <p style={{color : "red"}}>즐거운 하루 되세요!</p>
            </div>
        </>
    )
}

export default App5;