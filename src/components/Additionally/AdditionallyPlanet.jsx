import React from 'react'

import './css/Additionally3.css'

const AdditionallyPlanet = ({planetimizinSekili,planetimizinAdi,planetimizinMetni}) => {


  return (
    <div className='additionally_swiper'>
      <div className="sviper_sol">
      <img src={planetimizinSekili} alt="Planets" className='planetlerin_clasi' />
      </div>
      <div className="sviper_sag">
      <h1>{planetimizinAdi}</h1>
        <p>{planetimizinMetni}</p>
      </div>
      
    </div>
  )
}

export default AdditionallyPlanet