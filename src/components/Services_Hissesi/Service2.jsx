import React from 'react'

import Aos from 'aos'

import './css/Service2.css'

import asteroid from '../../assets/images/services_hissesi/service_section_iki/asteroid.png'

const Service2 = () => {

    Aos.init();

    return (
        <div className='service_section_iki'>

            <div className="service_section_sol">
                <img src={asteroid} alt="Planets" data-aos="fade-right" />
            </div>


            <div className="service_section_sag">
                <h2 data-aos="zoom-in-left">Earth is safe from a devastating asteroid impact for 1,000 years</h2>
                <p data-aos="zoom-in-left">Astronomers have completed a comprehensive examination of large asteroids that zoom near our planet, determining that Earth probably won't be struck by such an object for at least 1,000 years.

                    You may not want to breathe a sigh of relief just yet, however: The newly completed catalog looks at near-Earth objects (NEOs) at least 0.6 miles (1 kilometer) wide and therefore doesn't rule out strikes from smaller, yet still potentially dangerous, asteroids.

                    The team behind the new research looked at the positions and orbits of known NEOs, as cataloged by the NASA-funded Minor Planet Center at the Smithsonian Astrophysical Observatory (SAO). </p>
            </div>

        </div>
    )
}

export default Service2