import React from 'react'

import '../ZombiePlanets/css/Zombie1.css'

import qaraDelik from '../../assets/videos/black_hole.mp4'
import Aos from 'aos'

const Zombie1 = () => {
  Aos.init();
  return (
    <div className='zombie_lap_birinci'>
        <video src={qaraDelik} typeof='video/mp4' autoPlay muted loop></video>
        <h1 data-aos="fade-up"
     data-aos-duration="3000">Zombie Planets</h1>
    </div>
  )
}

export default Zombie1