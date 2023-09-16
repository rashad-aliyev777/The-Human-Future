import React,{useState,useEffect} from 'react'
import AdditionallyPlanet from './AdditionallyPlanet'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";


const AdditionallyPlanetler = () => {

  const [melumatlar,setMelumatlar] = useState([])

  useEffect(()=> {
    fetch('src/planetler.json')
    .then(cavab=>cavab.json())
    .then(menimFormam=>setMelumatlar(menimFormam))

  }, [])


  return (
    <div className='additionalyy_swiper'>

    <Swiper 
        spaceBetween={100}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          562: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          991: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}>
        {
          melumatlar.map(birPlanet=>(
            <SwiperSlide><AdditionallyPlanet planetimizinSekili={birPlanet.planetin_sekili} planetimizinAdi={birPlanet.adi} planetimizinMetni={birPlanet.metni}/></SwiperSlide>
          ))
        }
      </Swiper>
        
    </div>
  )
}

export default AdditionallyPlanetler