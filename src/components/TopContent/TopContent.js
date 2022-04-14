import React from 'react'
import { Link} from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
    return (
        <div className='topContent'>
            <div className='topContent__container'>
                <h1>Mr.Nadish Kumar Pandiarajan</h1>
                <p>A Profesional Web Developer</p>
                <a href='https://drive.google.com/file/d/1-S5DCzKTZybVZpsv323fqQfRqlWHus9a/view?usp=sharing'>
                    <button className='topcontent__downloadButton'>Download CV</button>
                </a>
                <Link to="projects" smooth= {true} duration ={500}>
                    <button className='topcontent__workButton'>My Work</button>
                </Link>
            </div>
        </div>
    )
}

export default TopContent
