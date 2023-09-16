import React from 'react'


import 'animate.css'
import './css/Section1.css'
import "./css/Navbar.css"

import AllPlanets from '../pages/AllPlanets'
import Button from "./Button"


import sectionVideosu from "../assets/videos/background_video.mp4"

const Section1 = () => {
  return (

    <>
    <div className="section_bir">

     <video src={sectionVideosu} typeof='video/mp4' autoPlay muted loop></video>
        
    <div className="yazilar">
        <h1 className='animate__animated animate__fadeIn animate__infinite'>Planets</h1>
        <p>The concept of planets has evolved throughout its history, from divine lights of antiquity to earthly objects in the scientific age. <br /> The concept has expanded to encompass not only worlds within the Solar System but also those within myriad other extrasolar systems.

            <br /> The agreed-upon definition of what constitutes a planet, as opposed to other objects orbiting the Sun, has changed several times. <br /> It previously included asteroids, moons, and dwarf planets like Pluto. Even today, some disagreements persist.

             <br /> The five classical planets of the Solar System, visible to the naked eye, have been known since ancient times and have had a significant impact on mythology, religious cosmology, and ancient astronomy. <br /> In antiquity, astronomers observed certain lights moving across the sky, in contrast to the "fixed stars" that maintained a consistent relative position. <br /> Ancient Greeks referred to these lights as "πλάνητες ἀστέρες" (planētes asteres, "wandering stars") or simply "πλανῆται" (planētai, "wanderers"), from which the modern word "planet" is derived.

              <br /> In ancient Greece, China, Babylon, and virtually all pre-modern civilizations, it was widely believed that Earth occupied the center of the Universe and that all the "planets" revolved around it. <br /> This perception stemmed from stars and planets appearing to orbit Earth each day, combined with the intuitive sense that Earth was solid, stable, and motionless.</p>
    </div>
    
    <div className="umumi-planetler">
      <h2>Planets live information</h2>
      <Button buttonunİcindekiYazi="Click" umumiPlanetlerMelumati={<AllPlanets />} />
    </div>

    </div>

    </>
  )
}

export default Section1