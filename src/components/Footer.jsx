import React from 'react'

import headerSekili from '../assets/images/header logo/diamond777.png'

import './css/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-sol">
        <a href="#"><img src={headerSekili} alt="" /></a>
        <div className="footer-link">
          <h5>Product</h5>
          <a href="#"><p>Features</p></a>
          <a href="#"><p>Integrations</p></a>
          <a href="#"><p>Pricing</p></a>
          <a href="#"><p>Changelog</p></a>
        </div>


        <div className="footer-link">
          <h5>Company</h5>
          <a href=""><p>Our Team</p></a>
          <a href=""><p>Our Values</p></a>
          <a href=""><p>Blog</p></a>
        </div>

        <div className="footer-link">
          <h5>Resources</h5>
          <a href=""><p>Downloads</p></a>
          <a href=""><p>Documentation</p></a>
          <a href=""><p>Contact</p></a>
        </div>




      </div>



      <div className="footer-sag">

        <h3>Social Platforms</h3>

      <div className="social-platforms">
      <ul>
  <li>
    <a className="facebook" href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <i className="fa-brands fa-facebook" aria-hidden="true"></i>
    </a>
  </li>
  <li>
    <a className="twitter" href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <i className="fa-brands fa-twitter" aria-hidden="true"></i>
    </a>
  </li>
  <li>
    <a className="instagram" href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <i className="fa-brands fa-instagram" aria-hidden="true"></i>
    </a>
  </li>
  <li>
    <a className="google" href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <i className="fa-brands fa-google-plus" aria-hidden="true"></i>
    </a>
  </li>
</ul>
      </div>
        

      </div>


    </div>

  )
}

export default Footer