import React from 'react'

import './css/BlogSection3.css'

import Aos from 'aos';

const BlogSection3 = () => {

    Aos.init();
    return (
        <div className='blog_section_uc'>
            <div className="elon_musk_sitat" data-aos="fade-right">
                <h3 >“You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”
                    <br />
                    <br />
                    -Elon Musk</h3>
            </div>
        </div>
    )
}

export default BlogSection3