import React from 'react'



import '../components/Blogs/css/BlogSection1.css'
import '../components/Blogs/css/BlogSection2.css'

import BlogSection1 from '../components/Blogs/BlogSection1'
import BlogSection2 from '../components/Blogs/BlogSection2'
import BlogSection3 from '../components/Blogs/BlogSection3'
import BlogSection4 from '../components/Blogs/BlogSection4'
import BlogSection5 from '../components/Blogs/BlogSection5'

const Blog = () => {
  return (
    <div>
           <BlogSection1 />
            <BlogSection2 />
            <BlogSection3 />
            <BlogSection4 />
            <BlogSection5 />


    </div>
  )
}

export default Blog