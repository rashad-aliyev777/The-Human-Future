import React from 'react'

import Aos from 'aos'

import './css/Service3.css'

import orbitSpace from '../../assets/videos/service_background.mp4'

const Service3 = () => {
    Aos.init();
    return (
        <div className='service_section_uc'>
            <video src={orbitSpace} typeof='video/mp4' autoPlay muted loop></video>
            <div className="orbit_space" data-aos="zoom-in-right">
                <h2>On-orbit refilling</h2>
                <p>Starship leverages tanker vehicles (essentially the Starship spacecraft minus the windows) to refill the Starship spacecraft in low-Earth orbit prior to departing for Mars. Refilling on-orbit enables the transport of up to 100 tons all the way to Mars. And if the tanker ship has high reuse capability, the primary cost is just that of the oxygen and methane, which is extremely low.</p>
            </div>
        </div>
    )
}

export default Service3