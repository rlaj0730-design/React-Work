import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {

    const {num} = useParams

  return (
    <div>About{num}</div>
  )
}

export default About