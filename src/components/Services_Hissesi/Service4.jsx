import React,{useEffect} from 'react'

import './css/Service4.css'

import Aos from 'aos'
import Button from '../Button';

const Service4 = () => {
        
        Aos.init();
   
  return (
    <div className='service_section_dorduncu'>
            <h1 data-aos="zoom-in-left">The moon</h1>
            <p data-aos="zoom-in-left">Returning humans to lunar missions</p>
            <Button buttonunİcindekiYazi="About" data-aos="zoom-in-left"/>
    </div>
  )
}

export default Service4