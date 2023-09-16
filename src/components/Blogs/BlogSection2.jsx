import React from 'react'
import Aos from 'aos';

const BlogSection2 = () => {

  Aos.init();
  return (
    <div className="blog_section_iki">

    <div className="blog_section_iki_sol">
        <h1 data-aos="fade-right">The Human Future</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OczrdOqAs-k?si=Km704sydJPStNh4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-aos="fade-right"></iframe>
    </div>

    <div className="blog_section_iki_sag">
        <h2>Do you want to know about everything?</h2>
        <h3>WATCH A VIDEO </h3>
    </div>

    </div>
  )
}

export default BlogSection2