import React from 'react'

import './css/Additionally1.css'
import Typed from 'react-typed';


import AdditionallyVideo from '../../assets/videos/life_beyond.mp4'

const Additionally1 = () => {
  return (
    <div className='additionally_bir'>
        <video src={AdditionallyVideo} typeof='video/mp4' autoPlay muted loop></video>

        <Typed  
                className='typed'
                strings={[
                    'Life Beyond']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
    </div>
  )
}

export default Additionally1