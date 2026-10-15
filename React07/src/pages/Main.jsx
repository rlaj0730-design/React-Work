import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Main = () => {

    const nav = useNavigate();

    const handleBtn = () => {
        
        nav("/about");
    }

  return (
    <div>
        Main
        <hr />
        <Link to="/about">About 페이지로 이동</Link>
        <button onClick={handleBtn}>About 페이지로 이동</button>


    </div>
  )
}

export default Main