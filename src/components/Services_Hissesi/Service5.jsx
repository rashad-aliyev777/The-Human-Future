import React from 'react'

import './css/Service5.css'

import Aos from 'aos'

const Service5 = () => {
    Aos.init();
  return (
    <div className='service_section_besinci'>
        <p data-aos="fade-up"
     data-aos-duration="1500">Only 24 human flown to the moon. <br />
        12 walked on its surface. <br />
        no one has been back since 1972.</p>
    </div>
  )
}

export default Service5