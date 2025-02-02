import React, { useState, useEffect, useRef } from "react";
import "../css/NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../images/image 1 (1).png";
import img2 from "../images/imagefb.webp";
import img3 from "../images/instagramicon.png";
import img4 from "../images/image5.png";
import { NavLink } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle navbar visibility
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track screen size
  const navbarRef = useRef(null); // Ref to detect clicks outside navbar

  // Detect screen size and update isSmallScreen
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(true); // Always show navbar on larger screens
      }
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect clicks outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        !event.target.classList.contains("menu-toggle") // Ignore menu toggle button clicks
      ) {
        setIsOpen(false); // Close the navbar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle navbar visibility
  };

  const handleClose = () => {
    setIsOpen(false); // Close navbar when a NavLink is clicked
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      handleClose(); // Close the navbar for small screens
    }
  };

  return (
    <>
      {/* Menu button */}
      {isSmallScreen && (
        <div
          className="menu-toggle threeline"
          id="menu-toggle"
          onClick={handleToggle}
        >
          &#9776;
        </div>
      )}

      {/* Navbar */}
      <Navbar
        ref={navbarRef}
        className={`flex-column position-fixed navbar-wrapper text-light ${
          isOpen || !isSmallScreen ? "show" : "hide"
        }`}
        style={{
          width: "250px",
          height: "100%",
          backgroundColor: "black",
          transition: "transform 0.3s ease",
          transform:
            isOpen || !isSmallScreen ? "translateX(0)" : "translateX(-250px)",
        }}
      >
        <img className="mt-3" src={img1} alt="photo of sudip" />
        <h5 className="mt-2">Sudip Rayamajhi</h5>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ color: "#FFD700" }}>Web Developer </span>in Nepal
        </p>
        <div className="social-media d-flex gap-4">
          <a
            href="https://www.facebook.com/su.dip.3363334"
            target="__blank"
            rel="noopener noreferrer"
          >
            <img style={{ height: "40px" }} src={img2} alt="facebook logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/sudip-rayamajhi-115183290/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <img style={{ height: "40px" }} src={img4} alt="linkedin logo" />
          </a>
          <a
            href="https://www.instagram.com/sudiprc_25/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <img style={{ height: "40px" }} src={img3} alt="instagram logo" />
          </a>
        </div>
        <Nav className="mt-4 flex-column gap-2 ">
          <NavLink
            className="text-light text-center navig"

            onClick={() => scrollToSection("#home")}
          >
            HOME
          </NavLink>
          <NavLink
            className="text-light text-center navig"
            onClick={() => scrollToSection("#about")}
          >
            ABOUT
          </NavLink>
          <NavLink
            className="text-light text-center navig"
            onClick={() => scrollToSection("#services")}
          >
            SERVICES
          </NavLink>
          <NavLink
            className="text-light text-center navig"
            onClick={() => scrollToSection("#skills")}
          >
            SKILLS
          </NavLink>
          <NavLink
            className="text-light text-center navig"
            onClick={() => scrollToSection("#education")}
          >
            EDUCATION
          </NavLink>
          <NavLink
            className="text-light text-center navig"
            onClick={() => scrollToSection("#contact")}
          >
            CONTACT
          </NavLink>
        </Nav>
        <footer className="mt-4">
          <p
            style={{ fontSize: "16px", textAlign: "center" }}
            className="text-center"
          >
            © Copyright 2025 All rights reserved. Designed and Developed by
            Sudip Rayamajhi.
          </p>
        </footer>
      </Navbar>
    </>
  );
}

export default NavBar;
