import React from 'react'

import { AiFillBulb } from "react-icons/ai";

import "./css/Section2.css"

const SectionApi = (props) => {
  return (
    <div className='section-api'>
          <i><AiFillBulb /></i>
         <h3>{props.kartinBasliqi}</h3>
         <p>{props.kartinMetni}</p>
    </div>
  )
}

export default SectionApi