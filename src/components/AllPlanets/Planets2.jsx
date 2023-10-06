import React from 'react'

import './css/Planets2.css'

import saturn from '../../assets/images/planets/saturn.png'
import Aos from 'aos'

const Planets2 = () => {
  Aos.init();
  return (
    <div className='planetsss' id='saturn'>
        <div className="saturn_melumat" data-aos="zoom-in-right">
          <img src={saturn} alt="Planets" />
        </div>

        <div className="saturn_yazilar" data-aos="zoom-in-left">
          <h1>Saturn</h1>
          <p>Saturn is the sixth planet in distance from the Sun and the second largest planet in the Solar System after Jupiter. Saturn is classified as a gas giant planet. Saturn is named after the Roman god of agriculture. The symbol of Saturn is.</p>
          <table>
            <tbody>
              <tr><td>Whose satellite</td>
                  <td>Sun</td>
              </tr>
              <tr><td>Satellites</td>
                  <td>146</td>
                  </tr>
              <tr><td>Weight(m)</td>
                  <td>5.6846⋅1026 kg
                      95.2 earth</td>
                  </tr>
              <tr><td>Angular diameter</td><td>14,5"—20,1"</td></tr>
              <tr><td>Apparent magnitude</td><td>from +1.47 to −0.24</td></tr>
            </tbody>
          </table>
        </div>

      
    </div>
  )
}

export default Planets2