import React from 'react'
import NavbarComponent from './Navbar'
import FooterComponent from './Footer'
import "./homeStyle.css"
import carlicon from "../assests/Vector.svg"
import icon24 from "../assests/Group.svg"
import sheildicon from "../assests/shield.svg"
import flowerclock from "../assests/flowerclock.png"
import roomimg from "../assests/room.png"
import lightlamp from "../assests/lightlamp.png"
import woman from "../assests/image97.svg"
import Elipse5 from "../assests/Ellipse5.svg"
import image106 from "../assests/image106.svg"
import image100 from "../assests/image100.svg"
import image101 from "../assests/image101.svg"
import african from "../assests/african.svg"
import image87 from "../assests/image87.svg"
import livingroom from "../assests/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering.svg"
import elipse8 from "../assests/Ellipse8.svg"
import elipse9 from "../assests/Ellipse9.svg"


const HomeComponent = () => {
  return (
    <div >
      <NavbarComponent/>
       <div className='bgwrapper'>
        <div className='bgcont'>
          <p>New Arrival</p>
          <h1>Discover Our <br />New Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Ut <br />elit tellus, luctus nec ullamcorper mattis.</p>
          <button>BUY Now</button>
        </div>
       </div>
       <div className='contbg'>
        <div className='conbg1'>
          <img src={carlicon} alt="carlicon-img" width={"70px"} />
          <div className='contbg2'>
          <h1>Free Delivery</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='conbg1'>
         <img src= {icon24} alt="icon24-img"  width={"70px"}/>
         <div className='contbg2'>
         <h1>Support 24/7</h1>
         <p>Lorem ipsum dolor sit amet.</p>
         </div>
        </div>
        <div className='conbg1'>
           <img src= {sheildicon} alt="sheildicon-img" width={"70px"} />
           <div className='contbg2'>
            <h1>100% Authentic</h1>
            <p>Lorem ipsum dolor sit amet.</p>
           </div>
        </div>


       </div>
       <div className='conbg2'>
        <h1>Inspiration Collection</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='contbg3'>
          <img src= {flowerclock} alt="flowerclock-image" style={{borderTopLeftRadius:"200px",marginTop:"100px"}} />
          <img src= {roomimg} alt="roomimg-image" />
          <img src= {lightlamp} alt="lightlamp-image" style={{marginTop:"100px"}}/>
        </div>
        <div className='contbg4'>
          <div className='contbg4-left'>
            <h1>Beautify Your Space</h1>
            <p>Do eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua. Ut enim ad minim veniam, <br />
            quis nostrud exercitation ullamco laboris.
            </p>
            <button>Learn More</button>
          </div>
          <div className='contbg4-right'>
           <img src= {woman} alt="woman-img" style={{zIndex:"1",borderTopLeftRadius:"100px",borderBottomRightRadius:"100px"}} />
           <img src={Elipse5} alt="Elipse5-img" style={{marginLeft:"-260px"}}/>
          </div>
        </div>
        <div className='contbg5'>
          <h1>Browse The Range</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='contbg6'>
          <div>
            <img src={image106} alt="image106" style={{width:"630px",borderRadius:"10px"}}/>
            <p>Dining</p>
          </div>
          <div>
            <img src={image100} alt="image100"style={{width:"630px",borderRadius:"10px"}} />
            <p>Living</p>
          </div>
          <div>
            <img src={image101} alt="image101"style={{width:"630px",borderRadius:"10px"}} />
            <p>Bedroom</p>
          </div>
        </div>
        <div className='chiziqwrap' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div className='chiziqwrap2' ></div>
        </div>
        <div className='contbg7'>
          <h1>How It Works</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='contbg8'>
        <div className='contbg82' style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <img src={african} alt="african-img" style={{width:"612.752px",zIndex:"-1"}}/>
           <img src={elipse8} alt="elipse8" style={{marginTop:"-70px",width:"140px",height:"140px",zIndex:"-1"}}/>
           <img src={elipse9} alt="elipse9" style={{width:"90px",height:"90px",marginTop:"-115px",zIndex:"-1"}} />
           <h1>1.</h1>
          </div>
        <div className='contbg82' style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <img src={image87} alt="image87-img" style={{width:"612.752px",zIndex:"-1"}}/>
          <img src={elipse8} alt="elipse8" style={{marginTop:"-70px",width:"140px",height:"140px",zIndex:"-1"}}/>
           <img src={elipse9} alt="elipse9" style={{width:"90px",height:"90px",marginTop:"-115px",zIndex:"-1"}} />
           <h1>2.</h1>
          </div>
        <div className='contbg82' style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <img src={livingroom} alt="livingroom-img" style={{width:"612.752px",zIndex:"-1"}}/>
          <img src={elipse8} alt="elipse8" style={{marginTop:"-70px",width:"140px",height:"140px",zIndex:"-1"}}/>
           <img src={elipse9} alt="elipse9" style={{width:"90px",height:"90px",marginTop:"-115px",zIndex:"-1"}} />
           <h1>3.</h1>
          </div>
        </div>
        <div className='contbg9'>
          <div>
           <h1>Purchase Securely</h1>
           <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
          </div>
          <div>
          <h1>Ships From Warehouse</h1>
           <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
          </div>
          <div>
          <h1>Style Your Room</h1>
          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
          </div>
        </div>
        <div className='contbg10'>
         <h1>Join Our Mailing List</h1>
         <p>Sign up to receive inspiration, product updates,<br /> and special offers from our team.</p>
         <div className='cont102'>
          <input type="text" placeholder='example@gmail.com' />
          <button>Submit</button>
         </div>
        </div>
      <FooterComponent/>
    </div>
  )
}

export default HomeComponent