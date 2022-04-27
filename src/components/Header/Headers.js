import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'
const Headers = () => {
    return (
        
             <div className='header'>
          <div className='header__left'>
              <h1>Develop<span>er</span></h1>
              </div>  
              <div className='header__right'>
                  <Link to="about" smooth={true} duration={500}>
                  <h4>
                      About Us
                  </h4>
                  </Link>
                  <Link to="skills" smooth={true} duration={500}>
                  <h4>
                      Skills
                  </h4>
                  </Link>
                  <Link to="project" smooth={true} duration={500}>
                  <h4>
                      Projects
                  </h4>
                  </Link>
                  
                  <Link to="contact" smooth={true} duration={500}>
                  <h4>
                    Contact
                  </h4>
                  </Link>
                  <a href='https://drive.google.com/file/d/1-S5DCzKTZybVZpsv323fqQfRqlWHus9a/view?usp=sharing' target="_blank">
                  <h4 className='header__rightButton'>Contact Me</h4>
                  </a>
                  </div>     
        </div>
        
    )
}

export default Headers
