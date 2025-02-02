import React from 'react'
import '../css/Services.css'
// import services from '../services.json'
function Services() {
  Services = [
    {
        "id":1,
        "image":"/src/images/website.png",
        "title":"Custom Website Development",
        "description":"Create a fully customized website tailored to your needs, featuring responsive design, fast loading times, and seamless navigation. Perfect for portfolios, businesses, and personal blogs."
    },
    {
        "id":2,
        "image":"/src/images/frontend.png",
        "title":"Front-End Development",
        "description":"Bring your designs to life with visually appealing, interactive, and user-friendly front-end development using cutting-edge technologies like React.js, HTML5, CSS3, and JavaScript."
    },
    {
        "id":3,
        "image":"/src/images/backend.png",
        "title":"Back-End Development",
        "description":"Build robust and scalable back-end systems for your applications, integrating databases, APIs, and secure server-side functionalities. Proficient in Node.js, PHP, and MySQL."
    },
    {
        "id":4,
        "image":"/src/images/ecommerce.png",
        "title":"E-Commerce Solutions",
        "description":"Develop e-commerce platforms with secure payment gateways, user-friendly shopping experiences, and inventory management to boost your online sales."
    },
    {
        "id":5,
        "image":"/src/images/main.png",
        "title":"Website Maintenance & Optimization",
        "description":"Ensure your website runs smoothly with ongoing maintenance services, speed optimization, and regular updates to improve performance and security."
    },
    {
        "id":6,
        "image":"/src/images/uiux.png",
        "title":"UI/UX Design",
        "description":"Craft intuitive user interfaces and experiences with wireframes, prototypes, and design elements that engage your audience and enhance usability."
    }
]
  
  return (
    <>
    <div id='services'  style={{backgroundColor:"aliceblue"}}>
    <div className="container services d-flex align-items-center justify-content-center flex-column py-3">
        <h5 className='title'>What i will do for you</h5>
        <h1 className="service">SERVICES</h1>
        <p style={{textAlign:"center"}} className='myService'>I offer a range of web development services designed to help businesses and individuals achieve their online goals. Whether you need a simple website, a complex web application, or a complete redesign, I’m here to deliver solutions that are both innovative and effective.</p>
        <div className='d-flex justify-content-center gap-4 flex-wrap'>
            {Services.map((data, index)=>(
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
