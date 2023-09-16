import React from 'react'

import './css/Service6.css'
import Aos from 'aos'


const Service6 = () => {

    Aos.init();
  return (
    <div className='service_section_altinci'>
            <h2 data-aos="fade-down">Why the moon ? </h2>
            <p data-aos="fade-down">The Moon is one of Earth’s closest habitable neighbors and provides an <br /> opportunity to gain valuable experience for missions to Mars and beyond.</p>
        <div className="tablica">
            <table data-aos="fade-down">
                <tbody>
                    <tr>
                        <td>Diameter</td>
                        <td>"3,475 km " <span>/ 2,159 mi</span></td>
                    </tr>
                    <tr>
                        <td>Day length</td>
                        <td>29.5 Earth days</td>
                    </tr>
                    <tr>
                        <td>Gravity</td>
                        <td>16.6% of Earth</td>
                    </tr>
                    <tr>
                        <td>Avg distance from Earth</td>
                        <td>"384,400 km " <span>/ 238,855 mi</span></td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>4.51 billion years</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Service6