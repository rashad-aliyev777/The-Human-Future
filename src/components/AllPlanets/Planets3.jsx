import React from 'react'

import './css/Planets3.css'

import yupiter from '../../assets/images/planets/yupiter.png'
import Aos from 'aos'

const Planets3 = () => {
    Aos.init();
    return (
        <div className='yupiter'>
            <div className="yupiter_sol" data-aos="zoom-out-right">
                <img src={yupiter} alt="Planets" />
            </div>

            <div className="yupiter_sag" data-aos="zoom-out-left">
                <h1>Yupiter</h1>
                <p>Jupiter is the largest planet in the Solar System, the fifth farthest from the Sun. Along with Saturn, Jupiter is classified as a gas giant.</p>
                <table>
                    <tbody>
                        <tr><td>Radius</td><td>69,911 km</td></tr>
                        <tr><td>Distance from the Sun</td><td>778,500,000 km</td></tr>
                        <tr><td>Weight</td><td>1.898E27 kg (317.8 M⊕)</td></tr>
                        <tr><td>Length of day</td><td>0 d 9 h 56 min</td></tr>
                        <tr><td>Acceleration of gravity</td><td>24.79 m/s²</td></tr>
                        <tr><td>Circulation period</td><td>12 years</td></tr>
                        <tr><td>Satellites </td> <td><span> Europa, Io, Ganymede, Callisto, S/2003 J 19 etc</span></td></tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Planets3