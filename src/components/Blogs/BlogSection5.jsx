import React from 'react'

import './css/BlogSection5.css'

import Aos from 'aos'

const BlogSection5 = () => {

    Aos.init();
  return (
    <div className='besinci_blog'>
      <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="700">MARS & BEYOND</h1>
      <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="700">THE ROAD TO MAKING HUMANITY MULTIPLANETARY</p>
    </div>
  )
}

export default BlogSection5