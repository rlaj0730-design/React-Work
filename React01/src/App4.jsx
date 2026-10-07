
function App4(){

    // 1부터 1000까지의 숫자 중 완전수를 출력하시오
    // 완전수 : 자기자신을 제외한 약수의 총합이 자신과 같은 것
    let result = [];

    for(let i =1; i <= 1000; i++){
        let sum = 0
        for(let j =1; j < i; j++){
            if(i % j == 0){
                sum += j
            }
        
        }
        if (sum === i){
            result.push(sum);
        }
        
    }
  

    return(
        <>
            <h1>App4 화면입니다.</h1>
            <h2>1부터 1000까지의 숫자 중 완전수를 출력하시오</h2>
            {result.join(" ")}
        </>
    )
}

export default App4