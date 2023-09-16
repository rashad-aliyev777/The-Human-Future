import React from 'react'


import '../../components/css/rengler.css'

const BlogSection1 = () => {

    const iframeStyles = {
        width: "100%",
        height: "100vh",
    }

  return (
    
            <div className="blog-section-bir">
                <iframe src="https://www.solarsystemscope.com/iframe" width="500" height="400" style={iframeStyles}></iframe>
            </div>
    
  )
}

export default BlogSection1