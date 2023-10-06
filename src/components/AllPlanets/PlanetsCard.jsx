import React,{useState,useEffect} from 'react'

import './css/PlanetsCard.css'
import Button from '../Button'
import { Link } from 'react-router-dom'


const PlanetsCard = (props) => {

  return (
    <>
    <div class="card">
        <div class="card-info">
                <img src={props.planetlerinSekili} alt="" />
                <p class="paraqraf">{props.paraqrafinIicindekiYazi}</p>
                <Button buttonunİcindekiYazi="Click"/>
        </div>
        
  </div>
  </>
  )
}

export default PlanetsCard