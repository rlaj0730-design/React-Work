import Main from "./pages/Main"
import About from "./pages/About"
import {Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <>
      <h1>React-Router-Dom을 사용해보자!</h1>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about/:num" element={<About />} />
      </Routes>

    </>
  )
}

export default App
