import React from 'react'
import Aos from 'aos'

import './css/Planets5.css'
import venera from '../../assets/images/planets/venera.png'


const Planets5 = () => {
    Aos.init();
  return (
    <div className='venera' id='venera'>
        <div className="venera_sol" data-aos="zoom-in-right">
            <img src={venera} alt="Planets" />
        </div>

        <div className="venera_sag" data-aos="zoom-in-left">
            <h1>Venera</h1>
            <p>Venus is the second farthest from the Sun and the sixth largest planet in the Solar System, along with Mercury, Earth and Mars, belonging to the family of terrestrial planets. Named after the ancient Roman goddess of love, Venus. Due to a number of characteristics - for example, mass and size - Venus is considered the “sister” of the Earth.</p>
            <table>
                <tbody>
                    <tr><td>Radius</td><td>6,051.8 km</td></tr>
                    <tr><td>Distance from the Sun</td><td>108,200,000 km</td></tr>
                    <tr><td>Length of day</td><td>243 d 0 h 0 min</td></tr>
                    <tr><td>Circulation period</td><td>225 days</td></tr>
                    <tr><td>Weight</td><td>4.867E24 kg (0.815 M⊕)</td></tr>
                    <tr><td>Surface area</td><td>460,200,000 km²</td></tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Planets5