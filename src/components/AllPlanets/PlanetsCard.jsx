import React from 'react'

import './css/PlanetsCard.css'
import Button from '../Button'

const PlanetsCard = (props) => {
  return (
    <div class="card">
        <div class="card-info">
            <img src={props.planetlerinSekili} alt="" />
            <p class="title">{props.paraqrafinIicindekiYazi}</p>
            <Button buttonunİcindekiYazi="Click"/>
        </div>
  </div>
  )
}

export default PlanetsCard