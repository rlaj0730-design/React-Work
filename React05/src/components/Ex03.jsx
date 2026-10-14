import React from 'react'
import Ex03Menu from './Ex03Menu'
import Ex03Content from './Ex03Content'
import Ex03Footer from './Ex03Footer'
import ModeProvider from '../provider/ModeProvider'

const Ex03 = () => {
  return (
    <div>
        <ModeProvider>
            <Ex03Menu/>
            <Ex03Content/>
            <Ex03Footer/>
        </ModeProvider>
    </div>
  )
}

export default Ex03