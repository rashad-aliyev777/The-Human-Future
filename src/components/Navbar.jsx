import React,{useRef} from 'react'

import headerSekili from '../assets/images/header logo/diamond777.png'

import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { GiCrossedSwords } from "react-icons/gi";


import Button from './Button'
import './css/Normalize.css'
import './css/Navbar.css'
import './css/Button.css'




const Navbar = () => {

    const overlayDivi = useRef()

    const overlayiAc = () => {
        overlayDivi.current.classList.add('active')
    }
    const overlayiBagla = () => {
        overlayDivi.current.classList.remove('active')
    }

  return (

<>

<div className="overlay_menu" ref={overlayDivi}>

    <button onClick={overlayiBagla} className='x_iconu'><GiCrossedSwords /></button>
    

    <div className="nav_links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/services">Services</Link>
        <Link to="/additionally">Additionally</Link>
        <Link to="/zombie">Zombie Planets</Link>
        <Link to='/allplanets'>All Planets</Link>
    </div>

</div>

<div className="header">

    <div className="logo-sol">
        <Link to="#"><img className='header-sekil' src={headerSekili} alt="Planets" /></Link>
    </div>


    <div className="linkler">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/services">Services</Link>
        <Link to="/additionally">Additionally</Link>
        <Link to="/zombie">Zombie Planets</Link>
        <Link to='/allplanets'>All Planets</Link>
    </div>

   

    <div className="header-buttonlar">
    <Button buttonunİcindekiYazi="Login" />
    <Button buttonunİcindekiYazi="Registration"/>
    </div>

    <button onClick={overlayiAc} className='fa-bars'><FaBars /></button>
    


</div>  
</>
   )
}

export default Navbar