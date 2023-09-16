import React from 'react'

import './css/Planets1.css'

import saturnCard from '../../assets/images/planets/saturn.png'
import yupiterCard from '../../assets/images/planets/yupiter.png'
import mercuryCard from '../../assets/images/planets/mercury.png'
import veneraCard from '../../assets/images/planets/venera.png'
import uranCard from '../../assets/images/planets/uran.png'
import neptunCard from '../../assets/images/planets/neptun.png'

import Aos from 'aos'
import PlanetsCard from './PlanetsCard';



const Planets1 = () => {
    Aos.init();
  return (
    
    <div className="planetss">
        <PlanetsCard className='sekiller_eyni' planetlerinSekili={saturnCard} paraqrafinIicindekiYazi="Saturn" />
        <PlanetsCard planetlerinSekili={yupiterCard} paraqrafinIicindekiYazi="Yupiter" />
        <PlanetsCard planetlerinSekili={mercuryCard} paraqrafinIicindekiYazi="Mercury" />
        <PlanetsCard planetlerinSekili={veneraCard} paraqrafinIicindekiYazi="Venera" />
        <PlanetsCard planetlerinSekili={uranCard} paraqrafinIicindekiYazi="Uran" />
        <PlanetsCard planetlerinSekili={neptunCard} paraqrafinIicindekiYazi="Neptune" />
    </div>
  )
}

export default Planets1