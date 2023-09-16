import React from 'react'

import './css/Planets7.css'
import neptune from '../../assets/images/planets/neptun.png'

const Planets7 = () => {
  return (
    <div className='neptun'>
        <div className="neptun_sol">
        <img src={neptune} alt="Planets" />
        </div>

        <div className="neptun_sag">
            <h1>Neptune</h1>
            <p>Neptune is the eighth and farthest planet from the Sun in the Solar System. Its mass exceeds the mass of the Earth by 17.2 times and is the third among the planets of the solar system, and in terms of equatorial diameter Neptune ranks fourth, surpassing the Earth by 3.9 times. The planet is named after Neptune, the Roman god of the seas.</p>
            <table>
                <tbody>
                    <tr><td>Radius</td><td>24,622 km</td></tr>
                    <tr><td>Circulation period</td><td>165 years</td></tr>
                    <tr><td>Weight</td><td>1,024E26 кг (17,15 M⊕)</td></tr>
                    <tr><td>Density</td><td>1.64 g/cm³</td></tr>
                    <tr><td>Opening</td><td>September 23, 1846</td></tr>
                    <tr><td>Surface area</td><td>7.618E9 km²</td></tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Planets7