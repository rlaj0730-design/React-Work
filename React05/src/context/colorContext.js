// Context 저장하는 API를 불러오기
import { createContext} from "react";

// Context 저장소에 저장할 변수 생성
let colorContext = createContext(null);

// 외부에서 사용할 수 있게 수출하기
export default colorContext;