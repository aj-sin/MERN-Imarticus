import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import CourseCard from "./CourseCard";


const CourseSection = () => {
  const navigate = useNavigate();
  const [USER, setUSER] = useState([]);
  const [courses, setCourses] = useState([]);
  const host = "http://localhost:5000";
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // console.log("getting note")
      const getuser = async () => {
        // API CALL
        const response = await fetch(`${host}/api/auth/getuser`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });
        const json = await response.json();
        console.log(USER)
        setUSER(json);
      };
      getuser();
      const fetchcourses = async () => {
        // API CALL
        const response = await fetch(`${host}/api/courses/fetchcourses`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        setCourses(json);
        console.log(courses,"-------------courses")
      };
      fetchcourses();


    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const handlelogout=()=>{
    localStorage.removeItem('token')
    navigate("/login")
  }
  return (
    <>
   
    <Navbar style={{ boxShadow: "0px 2px 0px grey" }}>
      <Navbar.Brand href="#home">
        <img src={logo} alt="" srcset="" />
      </Navbar.Brand>
      <Navbar.Brand href="#home">
        <h3>My Courses</h3>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="d-flex ">
            <div className="nav-component">

          <Button className="mx-2" variant="outline-success">Get Help</Button>
          <img
          className="ml-5"
          style={{width:"50px",height:"50px",borderRadius:"50%"}}
            src="https://cdn.pegasus.imarticus.org/images/Profile-01.svg"
            alt=""
            srcset=""
          />
            </div>
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {USER.Name}
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item ><Button className="mx-2" variant="outline-success" onClick={handlelogout}>Sign-out</Button></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    <div className="Courses">
      <div className="Sidebar">
            courses
      </div>
      <div className="video-Secion">
            
                { courses && courses.map((course)=>(
                   
                        <CourseCard name={course.name} image_url={course.image_url} enrollment={course.enrollment} free={course.free}/>
                    )
                
                )}

      </div>
    </div>
    </>
  );
};

export default CourseSection;
