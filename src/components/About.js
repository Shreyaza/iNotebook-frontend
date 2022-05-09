import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {

  return (
    <div className="about" >
      <div className="value-prop" >
        <h1 className="center">Why choose iNotebook?</h1>
        <div>iNotebook gives you everything you need to keep life organized—great note taking, Day planning, and easy ways to find what you need, when you need it.</div>
        <Link to='/' className="btn btn-primary my-3" role="button">Let's Get Started</Link>
      </div>
    </div>
  )
}

export default About
