import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg";
import {
    Link
  } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Navbar style={{ boxShadow: "0px 2px 0px grey" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" srcset="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="w-25 d-flex justify-content-between">
              <a href="#" className="hero-links">
                {" "}
                I-ACE
              </a>
              <a href="#" className="hero-links">
                {" "}
                Blog
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="hero-container d-flex flex-column mt-5">
        <h1>Introduction to Machine Learning</h1>

        <h6 className="hero-subheading">
          Free certification course of Machine Learning
        </h6>
        <div className="hero-info mt-3">
          <p>Created By: Ritesh Singh</p>
          <p>Course Duration : 1 Week</p>
        </div>
        <p className="free my-4">Free</p>

       <Link to="/login"><button className="btn-hero btn mt-5">Enroll Now</button></Link> 
      </Container>
    </div>
  );
};

export default Hero;
