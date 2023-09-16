import React, { useState, useEffect } from 'react';
import FrankDrake from '../assets/images/section3/frank.jpg';
import './css/Section3.css';

const Section3 = () => {

	AOS.init();

  return (
    <div className='ucuncu-section'>
      <div className='ucuncu-daxil'>
        <div className='ucuncu-sol'>
          <img src={FrankDrake} alt='' />
          <h1>Frank Donald Drake</h1>
        </div>
        <div className='ucuncu-sag'>
          <p>
		      Frank Donald Drake, an astronomer who pioneered the field of SETI (Search for Extraterrestrial Intelligence) died on September 2 at the age of 92. 
          Born in Chicago, Drake showed an early interest in chemistry and electronics.  He entered Cornell University as an undergraduate and a participant in the Navy’s Reserve Office Training Corps.  Upon graduation, he was assigned to the U.S.S. Albany and put in charge of the ship’s electronics.  He followed this interest upon entering Harvard University as a graduate student in radio astronomy.
          After earning his PhD, Drake took a position with the newly constituted National Radio Astronomy Observatory (NRAO) in Green Bank, West Virginia.  In 1958, the fledgling Observatory purchased a radio telescope “kit” from the Blaw-Knox Corporation in order to quickly have a research-grade instrument until a planned, larger antenna could be built.  A year later, the assembled telescope, with its 85 foot reflector, was outfitted for observations and dedicated to Howard Tatel, an engineer who designed its novel mount.  This prompted the NRAO director, to suggest to Drake that he come up with a research program to use the telescope. 
          Drake decided to follow another of his long-standing interests, and do a search, at microwave frequencies, for extraterrestrial transmissions.  The idea that intelligent beings elsewhere might be using radio as a communication mode was already old – both Guglielmo Marconi and Nikola Tesla had attempted to pick up signals from Mars that they could attribute to beings on the Red Planet.  With the greater astronomical sophistication that had developed by the 1950s, Drake opted to point the Tatel telescope in the direction of two nearby stars, Tau Ceti and Epsilon Eridani, each at about a dozen light-years’ distance.  For several weeks Drake alternately pointed the telescope at these stars.  The receiver was a commercial receiver designed for shortwave listening, and he used a simple motor drive to sweep its tuning up and down the dial.  
		  </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
