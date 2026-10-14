// 문제. modeContext이름의 저장소를 만들고 외부로 수출하시오

// Context 저장하는 API를 불러오기
import { createContext } from "react";

// Context 저장소에 저장할 변수 생성
let modeContext = createContext(null);

// 외부에서 사용할 수 있게 수출하기
export default modeContext;