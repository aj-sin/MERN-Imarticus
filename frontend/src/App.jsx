import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';

import Hero from './components/Hero';
import CourseSection from './components/CourseSection';
function App() {

  return (
    <>
    <Router>

    <Routes>
        <Route path="/" element={<Hero/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/courses" element={<CourseSection />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
