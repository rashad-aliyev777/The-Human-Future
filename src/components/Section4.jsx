import React, {useEffect} from 'react'

import Typed from 'react-typed'
import Aos from 'aos'
import 'aos/dist/aos.css';
import './css/Section4.css'
import KosmonavtSekil from '../assets/images/section4/kosmonavt.png'


const Section4 = () => {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='kosmonavt'>

      <div className="kosmonavt-sol">
        <Typed
              className='astronaut'
                strings={[
                    'Astronaut']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
        <p className='text-wrapper'>An astronaut or cosmonaut is a person who goes into outer space. The Soviet Union and countries that it was friends with used the word cosmonaut. Western countries including the United States said astronaut. Astronauts are also called "taikonauts" in China or "spationaute" in France.

          The first person to go into space was a Russian from the Soviet Union. His name was Yuri Gagarin. This happened on April 12, 1961. The first and second people to walk on the Moon were the Americans Neil Armstrong and Buzz Aldrin. This happened on July 20, 1969. No astronauts have gone to the moon since 1972. No people have visited any other planets yet.

          Astronauts used to go into space using many different ways, but now they only go on the American SpaceX Crew-1, the Russian Soyuz, or the Chinese Shenzhou. Several countries have worked together to build an International Space Station where people stay and work in space for long periods of time.

          A few countries and companies are trying to make more ways to get people into space. The United States is building a very big rocket called the Space Launch System. Some American companies, for example Boeing, Lockheed Martin, and SpaceX, are being paid by the United States to make ways for people to go to space.</p>
      </div>

      <div className="kosmonavt-sag">

        <img src={KosmonavtSekil} alt="" className='glitch-image' />
      </div>

    </div>
  )
}

export default Section4