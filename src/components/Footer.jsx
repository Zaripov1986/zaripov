import React from 'react'
import "./FooterStyle.css"
import image94 from "../assests/image94.svg"
import image95 from "../assests/image95.svg"
import image98 from "../assests/image98.svg"
import image96 from "../assests/image96.svg"

const FooterComponent = () => {
  return (
    <div className='Container'>
      <div style={{padding:"200px",display:"flex"}}>
      <div className='footerconleft'>
        <h1>Beauty Care</h1>
        <p>Do eiusmod tempor incididunt ut labore et <br />
        dolore magna aliqua. Ut enim ad minim veniam, <br />
        quis nostrud exercitation ullamco laboris.
        </p>
        <h1>Follow Us</h1>
      </div>
      <div className='footerconright'>
       <h1>Follow Us</h1>
       <div className='imgwrap'>
        <img src={image94} alt="image94" />
        <img src={image95} alt="image95" />
        <img src={image98} alt="image98" />
        <img src={image96} alt="image9" />
       </div>
      </div>
      </div>
    </div>
  )
}

export default FooterComponent