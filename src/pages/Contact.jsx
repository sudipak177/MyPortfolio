import React from 'react'
import '../css/Contact.css'
import { Col, Container, Row } from 'react-bootstrap'
import pic from '../images/imagefb.webp'
import pic2 from '../images/instagramicon.png'
import pic3 from '../images/image5.png'
import pic4 from '../images/wts.webp'
import pic5 from '../images/gmail.png'
function Contact() {
  return (
    <div id='contact' style={{backgroundColor:"#41516C"}} className='py-4'>
        <Container>
            <h2 className='text-center' style={{color:"white", fontWeight:"bold"}}>Find me on Social Media</h2>
            <div className="social mt-3 d-flex justify-content-center align-items-center gap-4 flex-wrap">
                <a          href="https://www.facebook.com/su.dip.3363334"
            target="__blank"><img style={{width:"40px"}} src={pic} alt="" /></a>
                <a     href="https://www.linkedin.com/in/sudip-rayamajhi-115183290/"
            target="__blank"><img style={{width:"40px"}} src={pic3} alt="" /></a>
                <a     href="https://www.instagram.com/sudiprc_25/"
            target="__blank"><img style={{width:"40px"}} src={pic2} alt="" /></a>
                <a href="https://wa.me/9847184993?text=Can I Talk With You?" target="_blank"><img style={{width:"55px"}} src={pic4} alt="" /></a>
                <a href="mailto:sudiprc177@gmail.com"><img style={{height:"55px", width:'50px'}}  src={pic5} alt="" /></a>
                 
            </div>
        </Container>
        
    </div>
  )
}

export default Contact
