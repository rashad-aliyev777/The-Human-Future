import React from 'react'

import './css/Zombie2.css'

import qaraDeliyIki from '../../assets/images/zombie/zombie_ikinci_section/black_hole.jpg'
import superNova from '../../assets/images/zombie/zombie_ikinci_section/supernova.jpg'
import pulsar from '../../assets/images/zombie/zombie_ikinci_section/pulsar.jpg'
import qaraDeliyUc from '../../assets/images/zombie/zombie_ikinci_section/black_hole_iki.jpg'
import superNovaIki from '../../assets/images/zombie/zombie_ikinci_section/supernova_iki.jpg'
import pulsarIki from '../../assets/images/zombie/zombie_ikinci_section/pulsar_iki.jpg'
import superNovaUc from '../../assets/images/zombie/zombie_ikinci_section/supernova_uc.jpg'
import qaraDeliyDord from '../../assets/images/zombie/zombie_ikinci_section/black_hole_uc.jpg'





const Zombie2 = () => {

  return (
        <div className="external">
    <div className="horizontal-scroll-wrapper">
      <div className="img-wrapper slower bir_bir">
        <img src={qaraDeliyIki} alt=""/>
      </div>
  
      <div className="img-wrapper faster">
          <img src={superNova} alt="" />
      </div>
  
      <div className="img-wrapper slower vertical">
          <img src={pulsar} alt="" />
      </div>
  
      <div className="img-wrapper slower slower-down">
          <img src="https://sm.mashable.com/mashable_in/photo/default/blackhole-space_2xjw.gif" alt="" />
      </div>
  
      <div className="img-wrapper">
          <img src={superNovaIki} alt="" />
      </div>
  
      <div className="img-wrapper slower">
          <img src={pulsarIki} alt=""/>
      </div>
  
      <div className="img-wrapper faster1">
          <img src={superNovaUc} alt="" />
      </div>
      
      <div className="img-wrapper slower slower2">
          <img src={qaraDeliyDord} alt="" />
      </div>
      
      <div className="img-wrapper">
          <img src="https://scitechdaily.com/images/Animation-Pulsar-Spinning-Neutron-Star.gif" alt="" />
      </div>
      
      <div className="img-wrapper slower">
          <img src="https://media.tenor.com/swR8ulvL2VsAAAAC/stars-super-nova.gif" alt="" />
      </div>
      
      <div className="img-wrapper slower last">
          <img src={qaraDeliyUc} alt="" />
      </div>
    </div>
  </div>
    
  )
}

export default Zombie2