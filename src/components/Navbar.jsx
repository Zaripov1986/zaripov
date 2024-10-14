import React from 'react'
import "./NavbarStyle.css"
import logo from "../assests/SkinClinic.svg"
const NavbarComponent = () => {
  return (
    <div className='NavbarContainer'>
        <div><img src={logo} alt="logo-img" /></div>
        <div className='Mune-containers'>
            <p>Home</p>
            <p>Services</p>
            <p>Doctors</p>
            <p>Products</p>
            <p>Gallery</p>
        </div>
    </div>
  )
}

export default NavbarComponent