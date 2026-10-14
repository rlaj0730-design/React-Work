// Context 저장하는 API를 불러오기
import { createContext} from "react";

// Context 저장소에 저장할 변수 생성
let colorContext = createContext(null);

// 외부에서 사용할 수 있게 수출하기
export default colorContext;


/*
    Context API란? React에서 컴포넌트간 값을 전역적으로 공유할 수 있도록 해주는 기능

    1. context파일을 생성 (.js)
     - createContext (import 해야함)
     - export

    2. contextProvier 컴포넌트를 생성 (.jsx)
     - 생성한 context import
     - 하위 컴포넌트를 가져오기 위해 {children} props 사용
     - {children} 을 Context.Provider로 감싼다
     - Context Provider의 value속성에다가 관리하고자 하는
       데이터(state, 함수 등) props로 전달

    3. Context를 사용할 컴포넌트들을 ContextProvider 컴포넌트로 감싸기

    4. 데이터를 사용하고 싶은 컴포넌트에서 useContext를 통해 데이터를 가져오기
     -const {사용할 데이터 또는 함수} = useContext(사용할Context);
*/