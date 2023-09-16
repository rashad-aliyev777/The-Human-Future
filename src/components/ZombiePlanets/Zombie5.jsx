import React from 'react'

import './css/Zombie5.css'
import Aos from 'aos'
import Button from '../Button.jsx'

const Zombie5 = () => {
    Aos.init();
    return (
        <div className='zombii_bess'>
            <div className="zombii_yazii" data-aos="zoom-in-right">
            <h1>Pulsar</h1>
            <p>Pulsars are rapidly spinning neutron stars, extremely dense stars composed almost entirely of neutrons and having a diameter of only 20 km (12 miles) or less. <br /> Pulsar masses range between 1.18 and 1.97 times that of the Sun, but most pulsars have a mass 1.35 times that of the Sun.</p>
            <Button buttonunİcindekiYazi='Additional'/>
            </div>
            
        </div>
    )
}

export default Zombie5