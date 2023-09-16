import React from 'react'

import uran from '../../assets/images/planets/uran.png'
import './css/Planets6.css'
import Aos from 'aos'

const Planets6 = () => {
    Aos.init();
  return (
    <div className='uran'>
        <div className="uran_sol" data-aos="zoom-in">
            <img src={uran} alt="Planets" />
        </div>

        <div className="uran_sag" data-aos="zoom-in-up">
            <h1>Uran</h1>
            <p>Uranium is a chemical element of the 3rd group of the seventh period of the periodic table of chemical elements of D.I. Mendeleev, with atomic number 92. Belongs to the actinide family. The simple substance uranium is a weakly radioactive metal of silvery-white color. Uranium has no stable isotopes.</p>
            <table>
                <tbody>
                    <tr><td>Symbol</td><td><span>U</span></td></tr>
                    <tr><td>Atomic mass</td><td>238.02891 a. eat.</td></tr>
                    <tr><td>Discoverer</td><td><span>Martin Heinrich Klaproth</span></td></tr>
                    <tr><td>Atomic number</td><td>92</td></tr>
                    <tr><td>Opening</td><td>1789 year</td></tr>
                    <tr><td>Melting temperature</td><td>1 132°C</td></tr>
                    <tr><td>CAS number</td><td>7440-61-1</td></tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Planets6