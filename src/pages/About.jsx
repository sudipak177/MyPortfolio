import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sudip from '../images/sudipPic.jpeg'
import '../css/About.css'
function About() {
  return (
    <div id='about'>
    <Container  style={{marginTop:"10px"}} >
      <div className=' row d-flex flex-wrap gap-3 align-items-center justify-content-center'>
        <div className=' col d-flex flex-column '>
        <h1 className="about">ABOUT ME</h1>
        <h5 className='title'>Sudip Rayamajhi - Web Developer</h5>
        <p className='aboutme'>I’m Sudip, a passionate and skilled web developer  currently studying BSc. IT with a focus on creating innovative, user-friendly, and responsive websites. With a blend of academic knowledge and practical experience in front-end and back-end development, I specialize in turning ideas into impactful digital solutions. My mission is to deliver websites that are not only visually appealing but also highly functional, ensuring a seamless user experience. Whether it’s building dynamic interfaces or implementing robust backend systems, I’m dedicated to helping businesses and individuals achieve their online goals.</p>
        </div>
      <img className='photoOf col ' src={sudip} alt="photo of sudip" />
      </div>
    </Container>
    </div>
  )
}

export default About
