
function App2(){
    // prompt를 통해서 숫자를 입력받아 
    // 입력받은 숫자가 홀수 인지 짝수인지 알려주는 것을 만드시오
    let num = Number(prompt("숫자를 입력하세요>>"));
    return (
        <>
            <h1>{num}은(는) { num %2 === 0 ? "짝수입니다.": "홀수입니다."}</h1>    
        </>
    )
}

// App2를 외부로 수출하기(수출하기가 정확한 용어임)
export default App2;