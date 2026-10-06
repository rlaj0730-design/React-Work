// 주석
// JSX (JavaScript XML) : 하나의 파일안에 HTML과 JS를 동시에 작성
/*
    -> 가독성이 좋고, 작성이 쉽다
    -> HTML과 JS의 분리감이 적다
    -> 확장자 .jsx사용. .js로도 사용은 가능
*/


function App() {
  // JS를 작성하는 부분
  let name = "박병관";
  let age = 10;

  return (
    // HTML을 작성하는 부분
    // React에서는 두개이상의 요소를 return할때는 반드시 부모 태그로 감싸줘야 한다
    // 그럼데 하나만 쓰더라도 감싸주는 습관을 들이면 좋다.
    // 일반적으로 아무 기능이 없는 <> 빈태그 Fragment Tag로 감싸준다.
    <>
      <h1>Hello! React!!</h1>
      <h2>저의 이름은! {name}</h2>
      <h3>저는 { age >= 19 ? "성인입니다.": "미성년자입니다."}</h3>
    </>
  )
}

export default App
