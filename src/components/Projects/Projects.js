import React from 'react'
import { useState } from 'react'
import './Project.css'

const Projects = (props) => {

    const [show, setshow] = useState(false)
    return (
        <a href={props.name.link}>
            <div
            className="projects" 
            onMouseEnter={() => setshow(true)} 
            onMouseLeave={() => setshow(false)} > 
            
                {
                    show ? (
                        <div className='project__content'>
                            <h4>{props.name.title}</h4>
                            <p>{props.name.desp}</p>
                        </div>
                    ) :
                        (
                            <img src={props.name.image}></img>
                        )

                }
            </div>
        </a>
    )
}

export default Projects
