
function App3() {
  // 1부터 100까지 숫자 중 짝수만 출력
  // 짝수만 저장할 변수
  let evenNum = [];
  for(let i =1; i <= 100; i++){
    if(i % 2 == 0){
        evenNum.push(i + " ");
    }
  }
    return(
        <>
            <h1>App3화면 입니다.</h1>
            <h2>1부터 100까지 숫자 짝수는</h2>
            {evenNum}
        </>
    )
}

export default App3;