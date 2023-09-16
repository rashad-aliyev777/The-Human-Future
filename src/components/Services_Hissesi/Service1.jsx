import React from 'react'

import './css/Service1.css'

import Aos from 'aos'

const Service1 = () => {

  Aos.init();

  return (
    <div className='service_section_bir'>
      <h2 data-aos="zoom-in">SpaceX Might Miss Its Goal Of <br /> 100 Rocket Launches In 2023</h2>
      <p data-aos="zoom-in">In less than a day after launching NASA's Crew 7 mission to the International Space Station (ISS), SpaceX flew its Falcon 9 rocket from the Cape Canaveral Space Force Station in Florida. The launch was SpaceX's 59th for 2023 and its 258th overall mission, indicating that it is unlikely that the firm will meet its self-set target of launching 100 rockets this year. SpaceX's Falcon 9 rocket was already vertical on the pad yesterday at the time of the Crew 7 launch, and if the company is to launch 100 missions this year, then it will have to launch one more mission this year and at least ten missions per month for the remainder of 2023.</p>
    </div>
  )
}

export default Service1