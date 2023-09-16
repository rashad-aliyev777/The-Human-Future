import React from 'react'

import './css/Additionally4.css'

import solTraplist from '../../assets/images/additionaly_hissesi/additionally_dord/traplist_1e.png'
import sagTraplist from '../../assets/images/additionaly_hissesi/additionally_dord/traplist_1f.png'

const Additionally4 = () => {
  return (
    <div className='additionally_dorduncu_iki_planet'>
      <div className="dorduncu_sol_e">
        <h2>Traplist-1-e</h2>
        <img src={solTraplist} alt="" />
      </div>

      <div className="dorduncu_orta">
        <div className="orta_e">
          <p>The planet that most closely resembles Earth is known as "Planet 1." Based on its location, it is believed to have an atmosphere containing gases such as nitrogen, hydrogen, carbon dioxide, and others. It is possible that there are seas, rivers, and various flowing waters on this planet. With approximately 60% similarity to Earth, it is considered to be the most favorable planet for the existence of life.</p>
          <p>The topic especially discusses the possibility of hosting life near the equator of this planet. Although it is colder compared to Planet 1, in certain locations, it might still be suitable for living organisms.</p>
        </div>
      </div>


      <div className="dorduncu_sag_e">
        <h2>Traplist-1-f</h2>
        <img src={sagTraplist} alt="" />
      </div>

    </div>
  )
}

export default Additionally4