import React from 'react'
import Ex02ColorList from './Ex02ColorList'
import Ex02ColorResult from './Ex02ColorResult'
// provider사용하기
import ColorProvider from '../provider/ColorProvider'

const Ex02 = () => {
  return (
    <div>
        {/* Ex02ColorList와 Ex02ColorResult에서 Context사용하기 위해 해당 provider로 감싸준다 */}
        <ColorProvider>
            <Ex02ColorList/>
            <hr />
            <Ex02ColorResult/>
        </ColorProvider>
    </div>
  )
}

export default Ex02