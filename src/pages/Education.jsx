import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/Education.css'

function Education() {
  return (
    <div id='education' className='py-5' style={{backgroundColor:"wheat", color:"black"}}>
    <Container>
        <h1 className="education">EDUCATION AND CERTIFICATION</h1>
<p style={{ textAlign: "center", fontWeight: "bold" }} className="myEducation">
I am a graduate of BSc (Hons) in Computer System Engineering from ISMT Butwal, specializing in web development. With additional certifications and practical experience, I am well-equipped to build innovative, scalable, and user-friendly web solutions.
</p>
<ul className='mt-5'>
                <li style={{ '--accent-color': '#41516C' }}>
                <div className="date">2022 - 2025</div>
                    <div className="title">BSc IT - ISMT Butwal</div>
                    <div className="descr">Completed Bachelor of Science in Information Technology (BSc IT). The program focused on web development, programming languages, and network security, equipping me with the technical and practical skills required for a career in IT. Successfully graduated in 2025.</div>
                </li>
                <li style={{ '--accent-color': '#FBCA3E' }}>
                    <div className="date">2021 - 2022</div>
                    <div className="title">+2 Science - JVT Tansen, Palpa</div>
                    <div className="descr">Completed the Higher Secondary Education (+2) in Science from JVT Tansen, Palpa. The curriculum provided a solid foundation in scientific and analytical thinking, enhancing my problem-solving abilities and interest in technology.</div>
                </li>
                <li style={{ '--accent-color': '#E24A68' }}>
                <div className="date">2020</div>
                    <div className="title">SEE - Devwani School Tansen</div>
                    <div className="descr">Completed the Secondary Education Examination (SEE) from Devwani School, Tansen. This marked the beginning of my academic journey, laying the groundwork for my higher education in Information Technology.</div>
                </li>
                <li style={{ '--accent-color': '#1B5F8C' }}>
                    <div className="date">2024</div>
                    <div className="title">Front-End Development Certificate-Somaarjun Tech Company</div>
                    <div className="descr">Received a certificate of completion in Front-End Development from Somaarjun Tech Company. This course provided hands-on experience in HTML, CSS, JavaScript, and other web technologies to create responsive, user-friendly websites.</div>
                </li>
                <li style={{ '--accent-color': '#4CADAD' }}>
                    <div className="date">2024</div>
                    <div className="title">Internship Certificate-Somaarjun Tech Company</div>
                    <div className="descr">Successfully completed an internship at Somaarjun Tech Company, where I gained practical exposure to web development and collaborated with a team on real-world projects.

</div>
                </li>
            </ul>
    </Container>
    </div>
  )
}

export default Education
