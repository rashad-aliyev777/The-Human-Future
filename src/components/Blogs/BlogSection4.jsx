import React from 'react'

import './css/BlogSection4.css'

import Mars from '../../assets/images/blog-section/blog-section-dord/mars.png'

import Aos from 'aos'

const BlogSection4 = () => {
    Aos.init();
  return (
    <div className='mars'>
        <div className="mars-sol" data-aos="fade-right">
            <img src={Mars} alt="" />
        </div>

        <div className="mars-sag" data-aos="fade-down">
            <h2>Why Mars ?</h2>
            <p>WHY MARS?
                At an average distance of 140 million miles, Mars is one of Earth's closest habitable neighbors. Mars is about half again as far from the Sun as Earth is, so it still has decent sunlight. It is a little cold, but we can warm it up. Its atmosphere is primarily CO2 with some nitrogen and argon and a few other trace elements, which means that we can grow plants on Mars just by compressing the atmosphere. Gravity on Mars is about 38% of that of Earth, so you would be able to lift heavy things and bound around. Furthermore, the day is remarkably close to that of Earth.</p>
            <table>
                <tbody>
                    <tr>
                        <td>Diameter</td>
                        <td>"6,791 km" <span>/ 4,220 mi</span></td>
                         </tr>
                    <tr>
                        <td>
                            Day Length</td>
                            <td>
                                24 hrs 37min
                            </td>
                    </tr>
                    <tr>
                        <td>
                            Force of Gravity
                        </td>
                        <td>
                            38% of Earth
                        </td>
                    </tr>
                    <tr>
                        <td>Avg Distance from Earth</td>
                        <td>"225 Mkm " <span>/ 140Mmi</span></td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>4.5 billion years</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default BlogSection4