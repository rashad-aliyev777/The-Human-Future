import React from 'react'

import './css/Planets4.css'
import mercury from '../../assets/images/planets/mercury.png'
import Aos from 'aos'

const Planets4 = () => {
    Aos.init();
  return (
    <div className='mercury'>
        <div className="mercury_sol" data-aos="zoom-in-right">
            <img src={mercury} alt="" />
        </div>

        <div className="mercury_sag" data-aos="zoom-in-left">
            <h1>Mercury</h1>
            <p>Mercury is the smallest planet in the solar system and the closest to the Sun. Named after the ancient Roman god of commerce, fast Mercury, because it moves across the sky faster than other planets. Its period of revolution around the Sun is only 87.97 Earth days - the shortest among all the planets in the Solar System.</p>
            <table>
                <tbody>
                    <tr><td>Radius</td><td>2,439.7 km</td></tr>
                    <tr><td>Length of day</td><td>59 d 0 h 0 min</td></tr>
                    <tr><td>Weight</td><td>3.285E23 kg (0.055 M⊕)</td></tr>
                    <tr><td>Distance from the Sun</td><td>58,000,000 km</td></tr>
                    <tr><td>Circulation period</td><td>88 days</td></tr>
                    <tr><td>Density</td><td>5.43 g/cm³</td></tr>
                    <tr><td>Acceleration of gravity</td><td>3.7 m/s²</td></tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Planets4