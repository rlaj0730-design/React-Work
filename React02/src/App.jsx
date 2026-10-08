
import Menu from "./components/Menu.jsx"
import Team from "./components/Team.jsx"
import Rectangle from "./components/Rectangle.jsx"
import Goods from "./components/Goods.jsx"
import Member from "./components/Member.jsx"

function App() {
  // props를 통해 Menu 컴포넌트에 데이터를 전달하기
 

  return (
    <>
      <h1>App</h1>
      <Member team="교육운영부" name="박병관"/>
      <Member team="첨단캠퍼스" name="장영우"/>
      <Member team="연구개발팀" name="황해도"/>
      <Member team="간부진" name="차준섭"/>

      {/* <Goods goods="양파" money={5000}/>
      <Goods goods="마늘" money={1000}/>
      <Goods goods="치킨" money={20000}/>
      <Goods goods="자전거" money={150000}/> */}

      {/* <Rectangle width="100px" height="100px" backgroundColor="red" />
      <Rectangle width="200px" height="200px" backgroundColor="blue" />
      <Rectangle width="300px" height="300px" backgroundColor="green" /> */}

      {/*<Menu drink="아이스티" money={5200} />
      <Menu drink="카페라떼" money={5000}/>
      <Menu drink="밀크티" money={6000}/>*/}

      {/*<Team name="강연" age={20} gender="여자" phone="010-1111-1111" />
      <Team name="이주현" age={20} gender="여자" phone="010-2222-2222" />
      <Team name="이희선" age={20} gender="여자" phone="010-3333-3333" />
      <Team name="임하늘" age={50} gender="남자" phone="010-4444-4444" />*/}
    </>
  )
}

export default App
