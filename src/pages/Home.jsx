import React from 'react';
import '../css/Home.css';
import { Container } from 'react-bootstrap';
import CV from '../images/CV.jpeg';
function Home() {


  return (
    <>
      <div id="home" className="home text-light" style={{ fontFamily: 'times-new-roman' }}>
        <Container>
          <h1 className="myName">
            Hii, I'am Sudip Rayamajhi.
          </h1>
          <h2 className="jobtitle">Web Developer</h2>
          <p className="aboutMe">
            As a dedicated web developer, I create dynamic, user-friendly websites using HTML, CSS, JavaScript, and modern frameworks. My focus is on writing clean, efficient code and staying current with industry trends to deliver innovative solutions. I am passionate about transforming ideas into reality through exceptional web development.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-btn" href={CV} download="CV_Sudip_Rayamajhi">
              Download CV
            </a>
            <a
              href="https://wa.me/9847184993?text=Can I Talk With You?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-btn">Let's Talk</button>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
