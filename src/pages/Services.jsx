import React from 'react'
import '../css/Services.css'
import services from '../services.json'
function Services() {
  return (
    <>
    <div id='services'  style={{backgroundColor:"aliceblue"}}>
    <div className="container services d-flex align-items-center justify-content-center flex-column py-3">
        <h5 className='title'>What i will do for you</h5>
        <h1 className="service">SERVICES</h1>
        <p style={{textAlign:"center"}} className='myService'>I offer a range of web development services designed to help businesses and individuals achieve their online goals. Whether you need a simple website, a complex web application, or a complete redesign, I’m here to deliver solutions that are both innovative and effective.</p>
        <div className='d-flex justify-content-center gap-4 flex-wrap'>
            {services.map((data, index)=>(
            <div key={index} className=' serviceCard text-center p-3 borderrr'>
                <img style={{width:"150px"}} src={data.image} alt="service" />
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
            ))}
        </div>
    </div>
    </div>
    </>
  )
}

export default Services
