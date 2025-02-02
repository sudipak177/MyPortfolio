import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/Skill.css';
import img1 from '../images/js.webp'
import img2 from '../images/React.webp'
import img3 from '../images/html.webp'
import img4  from '../images/css.png'
import img5 from '../images/bootstrap.png'
import img6 from '../images/git.png'
import img7 from '../images/github.png'
import img8 from '../images/figma.png'
import img9 from '../images/mysql.png'
import img10 from '../images/mongo.png'
import img11 from '../images/node.png'
import img12 from '../images/express.png'
import img13 from '../images/npm.png'
function Skills() {
    const skillset = [
        {
            "id":1,
            "name": "JavaScript",
            "image": img1
            
        },
        {
            "id":2,
            "name": "React",
            "image": img2
        },
        {
            "id":3,
            "name": "HTML",
            "image": img3
        },
        {
            "id":4,
            "name": "CSS",
            "image": img4
        },
        {
            "id":5,
            "name": "Bootstrap",
            "image": img5
        },
        {
            "id":6,
            "name": "Git",
            "image": img6
        },
        {
            "id":7,
            "name": "GitHub",
            "image": img7
        },
        {
            "id":8,
            "name": "Figma",
            "image": img8
        },
        {
            "id":9,
            "name": "MySQL",
            "image": img9
        },
        {
            "id":10,
            "name": "MongoDB",
            "image": img10
        },
        {
            "id":11,
            "name": "Node",
            "image": img11
        }
        ,
        {
            "id":12,
            "name": "Express JS",
            "image": img12
        },
        {
            "id":13,
            "name": "NPM",
            "image": img13
        }
    ]
  return (
    <div id='skills' className='py-5 ' style={{backgroundColor:"#F2F3F2"}}>
    <Container>
<h1 className="skills">SKILLS</h1>
<p style={{ textAlign: "center", fontWeight:"bold" }} className="mySkills">
I possess a diverse skill set in web development, ranging from front-end and back-end technologies to UI/UX design. My expertise ensures seamless, responsive, and user-friendly solutions that bring ideas to life while prioritizing functionality and innovation.
</p>
<div className="skill d-flex justify-content-center align-items-center flex-wrap gap-5 mt-5">
    {skillset.map((data, index)=>(
    <div key={index} className='s1 d-flex flex-column justify-content-center align-items-center'>
        <img className='pppp' style={{width:"100px", height:"80px"}} src={data.image} alt="logo of skill" />
        <h4 className='mt-1' style={{color:"Black"}}>{data.name}</h4>
    </div>
    ))}
</div>
    </Container>
    </div>
  )
}

export default Skills
