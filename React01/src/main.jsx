import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import App4 from './App4.jsx'
import App5 from './App5.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* 컨트롤 슬래시 하면 주석처리됨 */}
    {/*<App />*/}
    {/*<App2 />*/}
    {/*<App3 />*/}
    {/* <App4 /> */}
    <App5 />
    
  </>
)
// 코드자체 에러 --> 브라우저에서 뜸
// 그외 문법 오류 --> f12콘솔창에서 확인가능